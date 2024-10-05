import { TextField } from '@radix-ui/themes';
import { IconSearch } from '../../../icons';

const Search = () => {
  return (
    <TextField.Root size={'3'} placeholder='Search...'>
      <TextField.Slot side={'right'}>
        <IconSearch />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Search;
