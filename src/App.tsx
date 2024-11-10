import { useTranslation } from 'react-i18next';

import TransComponent from '@/components/TransComponents';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-10">
      <div className="align-center flex flex-col items-center">
        <p>
          {t('welcomeMessage', {
            count: 1,
          })}
        </p>
      </div>

      <TransComponent i18nKey="transSamples">
        Hello, <b>user!</b>
      </TransComponent>
    </div>
  );
}

export default App;
