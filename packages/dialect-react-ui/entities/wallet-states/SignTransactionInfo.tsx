import clsx from 'clsx';
import { Centered, Loader } from '../../components/common';
import { H3, P } from '../../components/common/preflighted';
import { useTheme } from '../../components/common/providers/DialectThemeProvider';

const SignTransactionInfo = () => {
  const { textStyles } = useTheme();
  return (
    <Centered>
      <H3
        className={clsx(textStyles.header, 'dt-flex dt-items-center dt-mb-1')}
      >
        <Loader className="dt-mr-2" /> Waiting for your wallet
      </H3>
      <P className="dt-text-center dt-max-w-sm dt-opacity-50 dt-font-inter dt-text-sm dt-font-medium dt-text-[#94A3B8]">
        To continue please prove you own this wallet by signing a transaction.
        This transaction <b>will not</b> be submited to the blockchain, and is
        free.
      </P>
    </Centered>
  );
};

export default SignTransactionInfo;
