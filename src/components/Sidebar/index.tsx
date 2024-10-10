import { Flex } from '@radix-ui/themes';
import SidebarItem, { SidebarMenu } from './SidebarItem';
import './styles.css';
import { Theme } from '@components/common/types';
import { IconRimon } from '@icons/index';
import { ReactNode } from 'react';

interface Props {
  theme?: Theme;
  menus: Array<SidebarMenu>;
  additionalContent?: ReactNode;
}

const Sidebar = ({ menus, additionalContent, theme = 'light' }: Props) => {
  return (
    <Flex
      className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} NextGen-SidebarContainer`}
      width={'240px'}
      direction={'column'}
    >
      <Flex justify={'center'} px={'24px'} py={'28px'} style={{ backgroundColor: 'var(--brand-color)' }}>
        <IconRimon />
      </Flex>
      <Flex direction={'column'} justify={'between'} height={'100%'}>
        <Flex direction={'column'} gap={'6px'} pt={'4'}>
          {menus.map((menu, index) => (
            <SidebarItem key={index} menuItem={menu} theme={theme} />
          ))}
        </Flex>
        {additionalContent}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
