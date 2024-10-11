import { Outlet } from 'react-router-dom';
import SidebarItem, { SidebarMenu } from '@components/Sidebar/SidebarItem';
import { IconData, IconFolder, IconSidebar, IconUserManagement, IconWidget } from './icons';
import { Flex } from '@radix-ui/themes';
import Sidebar from '@components/Sidebar';
import Topbar from '@components/Topbar';

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
          activePaths: ['^/admin/pages$', '^/admin/pages/\\d+(/edit)?$', '^/admin/builder/\\d+(/edit)?$'],
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

  const AdditionalContent = () => (
    <div style={{ backgroundColor: '#E0E0E0' }}>
      <SidebarItem
        menuItem={{
          icon: <IconUserManagement />,
          label: 'Back to Dashboard',
          path: '/',
        }}
      />
    </div>
  );

  return (
    <Flex width={'100%'} height={'100vh'} direction={'row'}>
      <Sidebar menus={menus} additionalContent={<AdditionalContent />} />
      <Flex direction={'column'} flexGrow={'1'}>
        <Topbar />
        <Flex flexGrow={'1'} height={'calc(100% - 82px)'} overflow={'auto'} style={{ backgroundColor: '#FAFAFA' }}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AdminApp;
