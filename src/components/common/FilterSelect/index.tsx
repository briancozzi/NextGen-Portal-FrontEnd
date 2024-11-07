import { Cross1Icon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Flex, Select, Text } from '@radix-ui/themes';
import './style.css';

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  optional?: boolean;
}

const FilterSelect = ({ label, value, onChange, options, placeholder, className, optional }: FilterSelectProps) => {
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('clear', e);
    onChange('');
  };

  return (
    <Flex
      direction={'column'}
      gap={'2'}
      className={`${className} ${optional ? 'optional-select' : ''} ${value ? 'has-value' : ''}`}
    >
      <Text size='2'>{label}</Text>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger placeholder={placeholder}>
          {optional && (
            <Flex justify={'between'} align={'center'} gap={'2'}>
              <span className='select-value'>{value}</span>
              {value?.length > 0 ? (
                <Cross1Icon
                  className='select-icon'
                  style={{ zIndex: 100 }}
                  color='#e31837'
                  strokeWidth={1.5}
                  onClick={handleClear}
                />
              ) : (
                <ChevronDownIcon className='select-icon' />
              )}
            </Flex>
          )}
        </Select.Trigger>
        <Select.Content position='popper' sideOffset={4}>
          <Select.Group className='select-viewport'>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default FilterSelect;
