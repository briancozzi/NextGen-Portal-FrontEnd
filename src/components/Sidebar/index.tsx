import { Flex } from '@radix-ui/themes';
import { ReactNode } from 'react';
import { IconRimon } from '../../icons';
import IconUserManagement from '../../icons/IconUserManagement';
import IconFolder from '../../icons/IconFolder';
import IconData from '../../icons/IconData';
import IconWidget from '../../icons/IconWidget';
import IconSidebar from '../../icons/IconSidebar';
import MenuItem, { SidebarMenu } from './MenuItem';

interface Props {
  children?: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const menus: Array<SidebarMenu> = [
    {
      icon: <IconUserManagement />,
      label: 'User Management',
      children: [
        { label: 'Create User', path: '/create_user' },
        { label: 'Manage Users', path: '/manage_users' },
      ],
    },
    {
      icon: <IconFolder />,
      label: 'Page Management',
      children: [
        { label: 'Create Page', path: '/create_page' },
        { label: 'Manage Pages', path: '/manage_pages' },
        { label: 'User Dashboards', path: '/user_dashboards' },
      ],
    },
    {
      icon: <IconData />,
      label: 'Data Management',
      path: '/data_management',
    },
    {
      icon: <IconWidget />,
      label: 'Widget Settings',
      path: '/widget_settings',
    },
    {
      icon: <IconSidebar />,
      label: 'Sidebar Settings',
      path: '/sidebar_settings',
    },
  ];

  return (
    <Flex width={'100%'} height={'100vh'} direction={'row'}>
      <Flex width={'240px'} direction={'column'} style={{ backgroundColor: '#EEEEEE' }}>
        <Flex justify={'center'} px={'24px'} py={'28px'} style={{ backgroundColor: 'red' }}>
          <IconRimon />
        </Flex>
        <Flex direction={'column'} gap={'6px'} pt={'4'}>
          {menus.map((menu) => (
            <MenuItem menuItem={menu} />
          ))}
        </Flex>
      </Flex>
      <Flex px={'3'} flexGrow={'1'} pt={'3'} style={{ backgroundColor: '#FFFFFF' }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
