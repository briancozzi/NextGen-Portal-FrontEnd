import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CreateUserPage from '@pages/UserManagement/CreateUserPage';
import DataManagementPage from '@pages/DataManagementPage';
import WidgetSettingsPage from '@pages/WidgetSettingsPage';
import SidebarSettingsPage from '@pages/SidebarSettingsPage';
import ManageUsersPage from '@pages/UserManagement/ManageUsersPage';
import ManagePagesPage from '@pages/PageManagement/ManagePagesPage';
import CreatePagePage from '@pages/PageManagement/CreatePagePage';
import UserDashboardsPage from '@pages/PageManagement/UserDashboardsPage';
import UpdateUserPage from '@pages/UserManagement/UpdateUserPage';

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
        path: '/users/:id/edit',
        element: <UpdateUserPage />,
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
