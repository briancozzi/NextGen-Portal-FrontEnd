import { Box, Flex, Text } from '@radix-ui/themes';
import { ReactNode, useState } from 'react';
import { IconArrowCircle } from '@icons';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  menuItem: SidebarMenu;
}

export interface SidebarMenu {
  icon?: ReactNode;
  label: string;
  children?: Array<SidebarMenu>;
  onClick?: () => void;
  path?: string;
  activePaths?: Array<string>;
}

const SidebarItem = ({ menuItem }: Props) => {
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
        gap={'15px'}
        pl={'24px'}
        pr={'11px'}
        py={'9px'}
        style={{
          cursor: 'pointer',
          borderRight: `4px ${isActive ? 'var(--brand-color)' : 'transparent'} solid`,
          backgroundColor: isActive ? '#FFF' : 'unset',
        }}
        onClick={() => (menuItem?.path ? navigate(menuItem.path) : toggleOpen())}
        justify={'start'}
      >
        <Flex width={'24px'}>{menuItem.icon}</Flex>
        <Flex justify={'start'} width={'calc(100% - 48px)'} align={'center'}>
          <Text size={'2'}>{menuItem.label}</Text>
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
          {menuItem.children && <IconArrowCircle />}
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
            key={index}
            pl={'61px'}
            py={'9px'}
            onClick={() => children?.path && navigate(children.path)}
            style={{
              cursor: 'pointer',
              borderRight: children?.activePaths?.some((path) => new RegExp(path).test(location.pathname))
                ? '4px red solid'
                : 'none',
              borderBottom: '1px solid #ADADAD',
            }}
          >
            <Text size={'2'}>{children.label}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SidebarItem;
