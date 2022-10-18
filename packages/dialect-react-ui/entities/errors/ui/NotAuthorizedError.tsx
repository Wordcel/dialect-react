import { useDialectWallet } from '@dialectlabs/react-sdk';
import clsx from 'clsx';
import { Button, Centered, ToggleSection } from '../../../components/common';
import { H3 } from '../../../components/common/preflighted';
import { useTheme } from '../../../components/common/providers/DialectThemeProvider';

const NotAuthorizedError = () => {
  const { textStyles } = useTheme();
  const { hardwareWalletForced, setHardwareWalletForced, initiateConnection } =
    useDialectWallet();

  return (
    <Centered>
      <H3
        className={clsx(textStyles.header, 'dt-flex dt-items-center dt-mb-4')}
      >
        Verify Wallet
      </H3>
      <span
        className={clsx(
          'dt-flex dt-items-center dt-mb-4 dt-w-[80%] dt-text-center dt-font-inter dt-text-sm dt-font-medium dt-text-[#94A3B8]'
        )}
      >
        To continue, please prove you own this wallet by signing a{' '}
        {hardwareWalletForced ? 'transaction' : 'message'}. It is free and does
        not involve the network.
      </span>
      <div className="dt-w-[305px] dt-h-[36px]">
        <ToggleSection
          noBorder
          title="Using ledger?"
          checked={hardwareWalletForced}
          onChange={(next) => setHardwareWalletForced(next)}
        />
        <Button 
          onClick={initiateConnection} 
          className="dt-w-full dt-mt-2 dt-text-white "
          defaultStyle=' dt-bg-[#1E293B] dt-rounded-[28px] dt-w-[305px] dt-h-[36px] dt-text-xs dt-font-medium dt-text-center dt-flex dt-items-center dt-justify-center'
          >
          {hardwareWalletForced ? 'Sign Transaction' : 'Sign Message'}
        </Button>
      </div>
    </Centered>
  );
};

export default NotAuthorizedError;
