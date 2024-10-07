import { Select as RadixSelect } from '@radix-ui/themes';
import './styles.css';

interface Props {
  options: Array<SelectOption>;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

const Select = ({ options, defaultValue, onChange, placeholder, disabled }: Props) => (
  <RadixSelect.Root defaultValue={defaultValue} value={defaultValue} onValueChange={onChange} disabled={disabled}>
    <RadixSelect.Trigger className={'NextGen-SelectTrigger'} placeholder={placeholder} />
    <RadixSelect.Content className={'NextGen-SelectContent'} position={'popper'}>
      {options.map((option) => (
        <RadixSelect.Item value={option.value}>{option.label}</RadixSelect.Item>
      ))}
    </RadixSelect.Content>
  </RadixSelect.Root>
);

export default Select;
