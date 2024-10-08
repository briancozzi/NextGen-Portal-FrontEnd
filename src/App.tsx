import { Outlet } from 'react-router-dom';
import Navigation from '@components/Navigation';

function App() {
  return (
    <Navigation>
      <Outlet />
    </Navigation>
  );
}

export default App;
