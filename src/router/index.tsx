import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ManageUsersPage from '../pages/UserManagement/ManageUsersPage';
import CreateUserPage from '../pages/UserManagement/CreateUserPage';
import CreatePagePage from '../pages/PageManagement/CreatePagePage';
import ManagePagesPage from '../pages/PageManagement/ManagePagesPage';
import UserDashboardsPage from '../pages/PageManagement/UserDashboardsPage';
import DataManagementPage from '../pages/DataManagementPage';
import WidgetSettingsPage from '../pages/WidgetSettingsPage';
import SidebarSettingsPage from '../pages/SidebarSettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: <ManageUsersPage />,
      },
      {
        path: '/users/create',
        element: <CreateUserPage />,
      },
      {
        path: '/user_dashboards',
        element: <UserDashboardsPage />,
      },
      {
        path: '/pages',
        element: <ManagePagesPage />,
      },
      {
        path: '/pages/create',
        element: <CreatePagePage />,
      },
      {
        path: '/data',
        element: <DataManagementPage />,
      },
      {
        path: '/widget',
        element: <WidgetSettingsPage />,
      },
      {
        path: '/sidebar',
        element: <SidebarSettingsPage />,
      },
    ],
  },
]);

export default router;
