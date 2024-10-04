import { Flex } from '@radix-ui/themes';
import { IconRimon } from '../../icons';
import IconUserManagement from '../../icons/IconUserManagement';
import IconFolder from '../../icons/IconFolder';
import IconData from '../../icons/IconData';
import IconWidget from '../../icons/IconWidget';
import IconSidebar from '../../icons/IconSidebar';
import SidebarItem, { SidebarMenu } from './SidebarItem';

const Sidebar = () => {
  const menus: Array<SidebarMenu> = [
    {
      icon: <IconUserManagement />,
      label: 'User Management',
      children: [
        { label: 'Create User', path: '/users/create' },
        { label: 'Manage Users', path: '/users' },
      ],
    },
    {
      icon: <IconFolder />,
      label: 'Page Management',
      children: [
        { label: 'Create Page', path: '/pages/create' },
        { label: 'Manage Pages', path: '/pages' },
        { label: 'User Dashboards', path: '/user_dashboards' },
      ],
    },
    {
      icon: <IconData />,
      label: 'Data Management',
      path: '/data',
    },
    {
      icon: <IconWidget />,
      label: 'Widget Settings',
      path: '/widget',
    },
    {
      icon: <IconSidebar />,
      label: 'Sidebar Settings',
      path: '/sidebar',
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
