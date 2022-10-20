import clsx from 'clsx';
import { Button, Loader } from '../../../common';
import { useTheme } from '../../../common/providers/DialectThemeProvider';
import IconButton from '../../../IconButton';
import Check from '../../../Icon/Check';

interface IRightAdorment {
  loading: boolean;
  currentVal: string;
  isSaved: boolean;
  isChanging: boolean;
  isVerified: boolean;
  onSaveCallback: () => void;
  onDeleteCallback: () => void;
  onUpdateCallback: () => void;
  deleteConfirm: (isDelete: boolean) => void;
  isDeleting: boolean;
}

export const RightAdornment = ({
  loading,
  currentVal,
  isSaved,
  isChanging,
  isVerified,
  onSaveCallback,
  onDeleteCallback,
  onUpdateCallback,
  isDeleting,
  deleteConfirm,
}: IRightAdorment) => {
  const { icons, addormentButton } = useTheme();

  const getIcon = () => {
    if (loading) {
      return (
        <div
          className={
            'dt-h-9 dt-w-9 dt-rounded-full dt-flex dt-items-center dt-justify-center dt-text-white dt-text-xs dt-border-0 dt-opacity-60'
          }
        >
          <Loader />
        </div>
      );
    }

    if (currentVal && !isSaved && !isChanging) {
      return (
        <Button
          onClick={onSaveCallback}
          className={clsx(addormentButton, 'dt-w-[72px] dt-h-[28px] dt-px-0')}
        >
        <Check />
        <span className=' dt-ml-1 dt-text-[#64758B] '>
          Enable
        </span>
        </Button>
      );
    }

    if (isSaved && isVerified && !isDeleting && !isChanging) {
      return (
        <IconButton
          className={clsx('dt-w-9 dt-h-9', addormentButton)}
          icon={<icons.trash />}
          onClick={() => {
            deleteConfirm(true);
          }}
        />
      );
    }

    if (isSaved && isVerified && isDeleting) {
      return (
        <Button
          onClick={onDeleteCallback}
          className={clsx(addormentButton, 'dt-w-[72px] dt-h-[28px] dt-px-0 dt-text-[#64758B]')}
        >
          Delete
        </Button>
      );
    }
  };

  return (
    <>
      {getIcon()}
      {isChanging && isChanging && (
        <Button
          onClick={onUpdateCallback}
          className={clsx(addormentButton, 'dt-w-[72px] dt-h-[28px] dt-px-0')}
        >
          <Check />
          <span className=' dt-ml-1 dt-text-[#64758B] '>
            Update
          </span>
        </Button>
      )}
    </>
  );
};
