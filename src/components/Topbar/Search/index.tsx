import { useDebounce } from 'use-debounce';
import { TextField } from '@radix-ui/themes';
import { IconSearch } from '@icons/index';
import { useEffect, useState } from 'react';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  debounceTime?: number;
}

const Search = ({ value, onChange, placeholder = 'Search...', debounceTime = 300 }: Props) => {
  const [searchTerm, setSearchTerm] = useState(value || '');
  const [debouncedValue] = useDebounce(searchTerm, debounceTime);

  useEffect(() => {
    if (onChange) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  return (
    <TextField.Root
      size={'3'}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder}
    >
      <TextField.Slot side={'right'}>
        <IconSearch />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Search;
