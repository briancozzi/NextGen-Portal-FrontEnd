import { Outlet } from 'react-router-dom';
import Navigation from '@components/Navigation';
import { SidebarMenu } from '@components/Sidebar/SidebarItem';
import { IconData, IconFolder, IconSidebar, IconUserManagement, IconWidget } from './icons';

function AdminApp() {
  const menus: Array<SidebarMenu> = [
    {
      icon: <IconUserManagement />,
      label: 'User Management',
      children: [
        { label: 'Create User', path: '/admin/users/create', activePaths: ['^/admin/users/create$'] },
        {
          label: 'Manage Users',
          path: '/admin/users',
          activePaths: ['^/admin$', '^/admin/users$', '^/admin/users/\\d+(/edit)?$'],
        },
      ],
    },
    {
      icon: <IconFolder />,
      label: 'Page Management',
      children: [
        { label: 'Create Page', path: '/admin/pages/create', activePaths: ['^/admin/pages/create$'] },
        {
          label: 'Manage Pages',
          path: '/admin/pages',
          activePaths: ['^/admin/pages$', '^/admin/pages/\\d+(/edit)?$', '^/builder/\\d+(/edit)?$'],
        },
        { label: 'User Dashboards', path: '/admin/user_dashboards', activePaths: ['^/admin/user_dashboards$'] },
      ],
    },
    {
      icon: <IconData />,
      label: 'Data Management',
      path: '/admin/data',
      activePaths: ['^/admin/data$'],
    },
    {
      icon: <IconWidget />,
      label: 'Widget Settings',
      path: '/admin/widget',
      activePaths: ['^/admin/widget$'],
    },
    {
      icon: <IconSidebar />,
      label: 'Sidebar Settings',
      path: '/admin/sidebar',
      activePaths: ['^/admin/sidebar$'],
    },
  ];

  return (
    <div>
      <Navigation menus={menus} theme={'light'}>
        <Outlet />
      </Navigation>
    </div>
  );
}

export default AdminApp;
