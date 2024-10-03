import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ManageUsersPage from '../pages/userManagement/ManageUsersPage';
import CreateUserPage from '../pages/userManagement/CreateUserPage';
import CreatePagePage from '../pages/pageManagement/CreatePagePage';
import ManagePagesPage from '../pages/pageManagement/ManagePagesPage';
import UserDashboardsPage from '../pages/pageManagement/UserDashboardsPage';
import DataManagementPage from '../pages/DataManagementPage';
import WidgetSettingsPage from '../pages/WidgetSettingsPage';
import SidebarSettingsPage from '../pages/SidebarSettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/manage_users',
        element: <ManageUsersPage />,
      },
      {
        path: '/create_user',
        element: <CreateUserPage />,
      },
      {
        path: '/create_page',
        element: <CreatePagePage />,
      },
      {
        path: '/manage_pages',
        element: <ManagePagesPage />,
      },
      {
        path: '/user_dashboards',
        element: <UserDashboardsPage />,
      },
      {
        path: '/data_management',
        element: <DataManagementPage />,
      },
      {
        path: '/widget_settings',
        element: <WidgetSettingsPage />,
      },
      {
        path: '/sidebar_settings',
        element: <SidebarSettingsPage />,
      },
    ],
  },
]);

export default router;
