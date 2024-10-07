import * as RadixSwitch from '@radix-ui/react-switch';
import './styles.css';

interface Props {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

const Switch = ({ checked, onCheckedChange }: Props) => {
  return (
    <RadixSwitch.Root className='SwitchRoot' checked={checked} onCheckedChange={onCheckedChange}>
      <RadixSwitch.Thumb className='SwitchThumb' />
    </RadixSwitch.Root>
  );
};

export default Switch;
