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

  let parsedMessage;
  let profile, link: string, text, name;
  try {
    parsedMessage = JSON.parse(message);
    profile = parsedMessage.profile;
    link = parsedMessage.link;
    text = parsedMessage.message;
    name = parsedMessage.name;
  } catch (e) {
    parsedMessage = message;
    profile = 'https://nftstorage.link/ipfs/bafybeidempjtydftpn6txv3wraqj36pkpnzkkmxvf4qlc3a4sl4wl23agu/wordcel.png';
    link = ''
    name = ''
    text = message;
  }
  return (
    <div
      className={clsx(
        'dt-flex dt-flex-col z-10 bg-slate-50',
        colors.highlight,
        notificationMessage
      )}
      onClick={() => {
        if (link) {
          window.open(link, '_blank');
        }
      }}
    >
      <div className="dt-flex-1">
        <div className="dt-flex dt-flex-row dt-items-start dt-mb-1 text-[#ff5151]">
          <img
            src={profile}
            width={33}
            height={33}
            className="dt-rounded-full dt-mr-2 border-1 border-[#E5E5E5]"
          />
          <div
          className={clsx(
            textStyles.body,
            'dt-break-words dt-whitespace-pre-wrap dt-font-medium dt-text-base'
          )}
        >
          {' '}
            <span style={{
              color: '#475668',
            }}>{name}</span> {text}{' '}
        </div>
        </div>

      </div>
      <div className={notificationTimestamp}>
        <P className={clsx(textStyles.small, 'dt-opacity-60')} style={{ color: '#CBD5E1' }}>
          {timeFormatter.format(timestamp)}
        </P>
      </div>
    </div>
  );
};
