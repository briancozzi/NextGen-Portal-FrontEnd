import { Flex } from '@radix-ui/themes';
import { IconFolder, IconData, IconWidget, IconSidebar, IconUserManagement, IconRimon } from '@icons';
import SidebarItem, { SidebarMenu } from './SidebarItem';

const Sidebar = () => {
  const menus: Array<SidebarMenu> = [
    {
      icon: <IconUserManagement />,
      label: 'User Management',
      children: [
        { label: 'Create User', path: '/users/create', activePaths: ['^/users/create$'] },
        { label: 'Manage Users', path: '/users', activePaths: ['^/$', '^/users$', '^/users/\\d+(/edit)?$'] },
      ],
    },
    {
      icon: <IconFolder />,
      label: 'Page Management',
      children: [
        { label: 'Create Page', path: '/pages/create', activePaths: ['^/pages/create$'] },
        { label: 'Manage Pages', path: '/pages', activePaths: ['^/pages$'] },
        { label: 'User Dashboards', path: '/user_dashboards', activePaths: ['^/user_dashboards$'] },
      ],
    },
    {
      icon: <IconData />,
      label: 'Data Management',
      path: '/data',
      activePaths: ['^/data$'],
    },
    {
      icon: <IconWidget />,
      label: 'Widget Settings',
      path: '/widget',
      activePaths: ['^/widget$'],
    },
    {
      icon: <IconSidebar />,
      label: 'Sidebar Settings',
      path: '/sidebar',
      activePaths: ['^/sidebar$'],
    },
  ];

  return (
    <Flex width={'240px'} direction={'column'} style={{ backgroundColor: '#EEEEEE' }}>
      <Flex justify={'center'} px={'24px'} py={'28px'} style={{ backgroundColor: 'var(--brand-color)' }}>
        <IconRimon />
      </Flex>
      <Flex direction={'column'} gap={'6px'} pt={'4'}>
        {menus.map((menu, index) => (
          <SidebarItem key={index} menuItem={menu} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
