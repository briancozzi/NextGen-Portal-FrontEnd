import { ReactNode } from 'react';
import './styles.css';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

const Hoverable = ({ onClick, children }: Props) => {
  return (
    <button className={'NextGen-Hoverable'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Hoverable;
