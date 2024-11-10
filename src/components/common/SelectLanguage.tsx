/* eslint-disable max-lines-per-function */
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const languages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
];

export function SelectLanguage() {
  const { i18n, t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');

  function handleSelect(currentValue: string) {
    i18n.changeLanguage(currentValue);
    setValue(currentValue === value ? '' : currentValue);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : t('selectLang.placeHolder')}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t('selectLang.placeHolder')} />
          <CommandList>
            <CommandEmpty>{t('selectLang.noResult')}</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(value) => handleSelect(value)}
                >
                  {language.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === language.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
