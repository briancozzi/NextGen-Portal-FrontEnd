import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AdminApp from '../AdminApp';
import CreateUserPage from '@pages/users/CreateUserPage';
import DataManagementPage from '@pages/DataManagementPage';
import WidgetSettingsPage from '@pages/WidgetSettingsPage';
import SidebarSettingsPage from '@pages/SidebarSettingsPage';
import ManageUsersPage from '@pages/users/ManageUsersPage';
import ManagePagesPage from '@pages/pages/ManagePagesPage';
import CreatePagePage from '@pages/pages/CreatePagePage';
import UserDashboardsPage from '@pages/pages/UserDashboardsPage';
import UpdateUserPage from '@pages/users/UpdateUserPage';
import UpdatePagePage from '@pages/pages/UpdatePagePage';
import BuilderPage from '@pages/BuilderPage';
import DashboardPage from '@pages/DashboardPage';
import DummyPage from '@pages/DummyPage';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminApp />,
    children: [
      {
        path: '',
        element: <ManageUsersPage />,
      },
      {
        path: '/admin/users',
        element: <ManageUsersPage />,
      },
      {
        path: '/admin/users/create',
        element: <CreateUserPage />,
      },
      {
        path: '/admin/users/:id/edit',
        element: <UpdateUserPage />,
      },
      {
        path: '/admin/user_dashboards',
        element: <UserDashboardsPage />,
      },
      {
        path: '/admin/pages',
        element: <ManagePagesPage />,
      },
      {
        path: '/admin/pages/create',
        element: <CreatePagePage />,
      },
      {
        path: '/admin/pages/:id/edit',
        element: <UpdatePagePage />,
      },
      {
        path: '/admin/data',
        element: <DataManagementPage />,
      },
      {
        path: '/admin/widget',
        element: <WidgetSettingsPage />,
      },
      {
        path: '/admin/sidebar',
        element: <SidebarSettingsPage />,
      },
      {
        path: '/admin/builder/:id/edit',
        element: <BuilderPage />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/attorneys',
        element: <DummyPage />,
      },
      {
        path: '/support_staff',
        element: <DummyPage />,
      },
      {
        path: '/departments',
        element: <DummyPage />,
      },
      {
        path: '/offices',
        element: <DummyPage />,
      },
      {
        path: '/news_insights',
        element: <DummyPage />,
      },
      {
        path: '/firm_links',
        element: <DummyPage />,
      },
      {
        path: '/my_links',
        element: <DummyPage />,
      },
      {
        path: '/accounting',
        element: <DummyPage />,
      },
      {
        path: '/admin_support',
        element: <DummyPage />,
      },
      {
        path: '/client_revenue',
        element: <DummyPage />,
      },
      {
        path: '/conflict',
        element: <DummyPage />,
      },
      {
        path: '/human_resources',
        element: <DummyPage />,
      },
      {
        path: '/it_software',
        element: <DummyPage />,
      },
      {
        path: '/legal_support',
        element: <DummyPage />,
      },
      {
        path: '/marketing_bd',
        element: <DummyPage />,
      },
    ],
  },
]);

export default router;
