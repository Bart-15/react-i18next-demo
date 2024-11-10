import { Trans } from 'react-i18next';

type TransComponentProps = {
  i18nKey: string;
  children: React.ReactNode;
};
const TransComponent = ({ i18nKey, children }: TransComponentProps) => {
  return <Trans i18nKey={i18nKey}>{children}</Trans>;
};

export default TransComponent;
