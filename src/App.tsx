import { Outlet } from 'react-router-dom';
import Navigation from '@components/Navigation';
import './App.css';
import seedData from '@api/seedData';

seedData();

function App() {
  return (
    <Navigation>
      <Outlet />
    </Navigation>
  );
}

export default App;
