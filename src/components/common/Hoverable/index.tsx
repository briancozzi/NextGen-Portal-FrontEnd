import { Button } from '@radix-ui/themes';
import { ReactNode } from 'react';
import './styles.css';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

const Hoverable = ({ onClick, children }: Props) => {
  return (
    <Button className={'hoverable'} variant={'surface'} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Hoverable;
