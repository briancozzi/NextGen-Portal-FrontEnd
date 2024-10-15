import { Flex } from '@radix-ui/themes';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { ReactNode } from 'react';
import { Theme } from '@components/common/types';
import { SidebarMenu } from '@components/Sidebar/SidebarItem';

interface Props {
  theme: Theme;
  menus: Array<SidebarMenu>;
  children: ReactNode;
  additionalContent?: ReactNode;
}

const Navigation = ({ theme, menus, additionalContent, children }: Props) => {
  return (
    <Flex width={'100%'} height={'100vh'} direction={'row'}>
      <Sidebar menus={menus} theme={theme} additionalContent={additionalContent} />
      <Flex direction={'column'} flexGrow={'1'}>
        <Topbar />
        <Flex flexGrow={'1'} height={'calc(100% - 82px)'} overflow={'auto'} style={{ backgroundColor: '#FAFAFA' }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
