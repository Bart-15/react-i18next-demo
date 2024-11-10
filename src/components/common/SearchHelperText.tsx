import { useTranslation } from 'react-i18next';

import { Input } from '@/components/ui/input';

type SearchHelperTextProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchHelperText = ({
  searchTerm,
  setSearchTerm,
}: SearchHelperTextProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Input
        type="text"
        placeholder={t('searcHelperText.placeHolder')}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="mb-4 rounded border p-2"
      />
      {searchTerm.length ? (
        <p className="text-xs font-light">
          {t('searcHelperText.searchResult', {
            searchTerm,
          })}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchHelperText;
