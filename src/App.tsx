import { Outlet, useLocation } from 'react-router-dom';
import SidebarItem, { SidebarMenu } from '@components/Sidebar/SidebarItem';
import {
  IconData,
  IconFolder,
  IconOffice,
  IconPlusCircle,
  IconSetting,
  IconSidebar,
  IconUserManagement,
} from './icons';
import { Flex, Text } from '@radix-ui/themes';
import Sidebar from '@components/Sidebar';
import Topbar from '@components/Topbar';
import { useMemo } from 'react';

function App() {
  const menus: Array<SidebarMenu> = useMemo(
    () => [
      {
        icon: <IconUserManagement color='white' />,
        label: 'Dashboard',
        path: '/dashboard',
        activePaths: ['^/dashboard$', '^/$'],
      },
      {
        icon: <IconFolder color={'#E9EAEB'} />,
        label: 'Firm Directory',
        children: [
          { label: 'Attorneys', path: '/attorneys', activePaths: ['^/attorneys$'] },
          {
            label: 'Support Staff',
            path: '/support_staff',
            activePaths: ['^/support_staff$'],
          },
        ],
      },
      {
        icon: <IconData color={'#E9EAEB'} />,
        label: 'Departments',
        children: [{ label: 'Manage Departments', path: '/departments', activePaths: ['^/departments$'] }],
      },
      {
        icon: <IconOffice />,
        label: 'Offices',
        path: '/offices',
        activePaths: ['^/offices$'],
      },

      {
        icon: <IconSidebar color={'#A8B0B9'} />,
        label: 'News & Insights',
        path: '/news_insights',
        activePaths: ['^/news_insights$'],
      },
      {
        name: 'Firm Links',
        label: (
          <Flex justify={'between'} width={'100%'}>
            <Text size={'2'}>{'Firm Links'}</Text>
            <IconPlusCircle />
          </Flex>
        ),
        children: [{ label: 'Manage Links', path: '/firm_links', activePaths: ['^/firm_links$'] }],
        backgroundColor: '#202020',
      },
      {
        name: 'My Links',
        label: (
          <Flex justify={'between'} width={'100%'}>
            <Text size={'2'}>{'My Links'}</Text>
            <Flex>
              <IconPlusCircle />
              <IconSetting />
            </Flex>
          </Flex>
        ),
        children: [{ label: 'Manage Links', path: '/my_links', activePaths: ['^/my_links$'] }],
        backgroundColor: '#202020',
      },
    ],
    []
  );

  const AdditionalContent = () => (
    <SidebarItem
      menuItem={{
        icon: <IconSetting />,
        label: 'Admin Center',
        path: '/admin',
      }}
      theme={'dark'}
    />
  );

  const location = useLocation();
  const combinedMenus = useMemo(
    () =>
      menus.flatMap((menu) => [
        {
          label: menu.label,
          path: menu.path,
          activePaths: menu.activePaths,
        },
        ...(menu?.children ?? []),
      ]),
    [menus]
  );

  const activeMenu = useMemo(
    () =>
      combinedMenus.find(
        (menu) =>
          menu?.path === location.pathname || menu.activePaths?.some((path) => new RegExp(path).test(location.pathname))
      ),
    [combinedMenus, location.pathname]
  );

  return (
    <Flex width={'100%'} height={'100vh'} direction={'row'}>
      <Sidebar menus={menus} theme={'dark'} additionalContent={<AdditionalContent />} />
      <Flex direction={'column'} flexGrow={'1'}>
        <Topbar
          label={typeof activeMenu?.label === 'string' ? activeMenu?.label : activeMenu?.name}
          canSwitchOrg={true}
        />
        <Flex flexGrow={'1'} height={'calc(100% - 82px)'} overflow={'auto'} style={{ backgroundColor: '#FAFAFA' }}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
