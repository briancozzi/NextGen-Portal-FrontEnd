import { Outlet } from 'react-router-dom';
import Navigation from '@components/Navigation';
import './App.css';
import { useEffect } from 'react';
import seedData from '@api/seedData';

function App() {
  useEffect(() => {
    seedData();
  }, []);
  return (
    <Navigation>
      <Outlet />
    </Navigation>
  );
}

export default App;
