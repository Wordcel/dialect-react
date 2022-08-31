import clsx from 'clsx';
import { LinkifiedText } from '../../../common';
import { P } from '../../../common/preflighted';
import { useTheme } from '../../../common/providers/DialectThemeProvider';

type Props = {
  message: string;
  timestamp: number;
};

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

export const Notification = ({ message, timestamp }: Props) => {
  const { colors, textStyles, notificationMessage, notificationTimestamp } =
    useTheme();
  console.log('message', message);
  console.log('timestamp', timestamp);
  return (
    <div
      className={clsx(
        'dt-flex dt-flex-col',
        colors.highlight,
        notificationMessage
      )}
      onClick={() => {
        window.open('https://wordcel.club', '_blank');
      }}
    >
      <div className="dt-flex-1">
        <div className="dt-flex dt-flex-row dt-items-start dt-mb-1 ">
          <img
            src="https://arweave.net/HXk7c5-EuWQ1umsxpDcVlWCz4bqU0zJy_ZCyaNz5MrI?ext=png"
            width={30}
            height={30}
            className="dt-rounded-full dt-mr-2"
          />
          <p className="dt-font-normal dt-text-md">
            {' '}
            <LinkifiedText>{message}</LinkifiedText>{' '}
          </p>
        </div>
        {/* <P
          className={clsx(
            textStyles.body,
            'dt-break-words dt-whitespace-pre-wrap dt-font-medium dt-text-base'
          )}
        >
          <LinkifiedText>{message}</LinkifiedText>
        </P> */}
      </div>
      <div className={notificationTimestamp}>
        <P className={clsx(textStyles.small, 'dt-opacity-60')}>
          {timeFormatter.format(timestamp)}
        </P>
      </div>
    </div>
  );
};
