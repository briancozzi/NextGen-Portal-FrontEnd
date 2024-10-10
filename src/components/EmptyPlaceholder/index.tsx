import { IconDashboard } from '@icons';
import './styles.css'; // Import the CSS file

const EmptyPlaceholder = () => {
  return (
    <div id='NextGen-gjs-placeholder'>
      <IconDashboard />
      <div className='NextGen-placeholder-container'>
        <span className='NextGen-text-primary'>Customize your user dashboard with powerful widgets</span>
        <span className='NextGen-text-secondary'>that allow for quick access to daily workflow processes.</span>
      </div>

      <button className='NextGen-button'>GET STARTED NOW</button>
    </div>
  );
};

export default EmptyPlaceholder;
