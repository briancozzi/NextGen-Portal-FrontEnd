import { TextField as RadixTextField } from '@radix-ui/themes';
import './styles.css';

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const TextField = ({ value, onChange, disabled }: Props) => {
  return <RadixTextField.Root className={'TextField'} value={value} onChange={onChange} disabled={disabled} />;
};

export default TextField;
