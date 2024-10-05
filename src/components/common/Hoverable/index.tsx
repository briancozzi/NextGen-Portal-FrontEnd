import { Button } from '@radix-ui/themes';
import { ReactNode } from 'react';
import './styles.css';

interface Props {
  children?: ReactNode;
}

const Hoverable = ({ children }: Props) => {
  return (
    <Button className={'hoverable'} variant={'surface'}>
      {children}
    </Button>
  );
};

export default Hoverable;
