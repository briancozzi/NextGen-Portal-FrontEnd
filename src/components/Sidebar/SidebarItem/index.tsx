import { Box, Flex, Text } from '@radix-ui/themes';
import { ReactNode, useState } from 'react';
import { IconArrowCircle } from '@icons';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import { Theme } from '@components/common/types';

interface Props {
  menuItem: SidebarMenu;
  theme?: Theme;
}

export interface SidebarMenu {
  icon?: ReactNode;
  name?: string;
  label: string | ReactNode;
  children?: Array<SidebarMenu>;
  onClick?: () => void;
  path?: string;
  activePaths?: Array<string>;
  backgroundColor?: string;
}

const SidebarItem = ({ menuItem, theme = 'dark' }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive =
    menuItem?.activePaths?.some((path) => new RegExp(path).test(location.pathname)) ||
    menuItem.children?.some((child) => child?.activePaths?.some((path) => new RegExp(path).test(location.pathname))) ||
    false;

  const [isOpen, setIsOpen] = useState(isActive);
  const toggleOpen = () => setIsOpen((prevState) => !prevState);
  const height = menuItem?.children?.length ? `${menuItem?.children?.length * 40}px` : 'auto';

  return (
    <Flex direction={'column'}>
      <Flex
        className={`NextGen-SidebarItemContainer ${isActive ? 'NextGen-SidebarItemContainer--active' : ''}`}
        gap={'4px'}
        pl={'24px'}
        pr={'11px'}
        py={'9px'}
        style={{
          cursor: 'pointer',
          borderRight: `4px ${isActive ? 'var(--brand-color)' : 'transparent'} solid`,
          backgroundColor: menuItem.backgroundColor && !isActive ? menuItem.backgroundColor : '',
        }}
        onClick={() => (menuItem?.path ? navigate(menuItem.path) : toggleOpen())}
        justify={'between'}
      >
        {menuItem.icon && (
          <Flex width={'24px'} mr={'19px'}>
            {menuItem.icon}
          </Flex>
        )}
        <Flex justify={'start'} width={'100%'} align={'center'}>
          {typeof menuItem.label === 'string' ? <Text size={'2'}>{menuItem.label}</Text> : menuItem.label}
        </Flex>
        <Box
          style={{
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
            transformOrigin: 'center',
            transition: 'ease-in all .2s',
          }}
          height={'24px'}
          width={'24px'}
        >
          {menuItem.children && <IconArrowCircle color={theme === 'light' ? '#5A5A5A' : '#D9D9D9'} />}
        </Box>
      </Flex>
      <Flex
        height={isOpen ? height : '0px'}
        overflow={'hidden'}
        direction={'column'}
        style={{ transition: 'ease-in all .1s' }}
      >
        {menuItem.children?.map((children, index) => (
          <Flex
            className={`NextGen-SidebarItemChildContainer ${
              children?.activePaths?.some((path) => new RegExp(path).test(location.pathname))
                ? 'NextGen-SidebarItemChildContainer--active'
                : ''
            }`}
            key={index}
            pl={menuItem.icon ? '71px' : '23px'}
            py={'9px'}
            onClick={() => children?.path && navigate(children.path)}
            style={{
              cursor: 'pointer',
              borderRight: children?.activePaths?.some((path) => new RegExp(path).test(location.pathname))
                ? '4px red solid'
                : 'none',
            }}
          >
            {typeof children.label === 'string' ? <Text size={'2'}>{children.label}</Text> : children.label}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SidebarItem;
