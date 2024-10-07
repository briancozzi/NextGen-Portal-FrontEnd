import ReactDatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  value: string;
  onChange?: (value: Value) => void;
  disabled?: boolean;
}

const DatePicker = ({ value, onChange, disabled }: Props) => (
  <ReactDatePicker className={'NextGen-DatePicker'} value={value} onChange={onChange} disabled={disabled} />
);

export default DatePicker;
