import { Box, Flex, Text } from '@radix-ui/themes';
import { ReactNode, useEffect, useState } from 'react';
import IconArrowCircle from '../../../icons/IconArrowCircle';
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
}

const MenuItem = ({ menuItem }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive =
    menuItem?.path === location.pathname ||
    menuItem.children?.some((children) => children.path === location.pathname) ||
    false;

  const [isOpen, setIsOpen] = useState(isActive);
  const toggleOpen = () => setIsOpen((prevState) => !prevState);
  const height = menuItem?.children?.length ? `${menuItem?.children?.length * 42}px` : 'auto';

  useEffect(() => console.log(menuItem.label, { isOpen }), []);

  return (
    <Flex direction={'column'}>
      <Flex
        gap={'15px'}
        pl={'24px'}
        pr={'11px'}
        py={'9px'}
        style={{
          cursor: 'pointer',
          borderRight: isActive ? '4px red solid' : 'unset',
          backgroundColor: isActive ? '#FFF' : 'unset',
        }}
        onClick={() => (menuItem?.path ? navigate(menuItem.path) : toggleOpen())}
      >
        {menuItem.icon}
        <Text size={'2'}>{menuItem.label}</Text>
        {menuItem.children && (
          <Box
            style={{
              transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
              transformOrigin: 'center',
              transition: 'ease-in all .2s',
            }}
            height={'24px'}
          >
            <IconArrowCircle />
          </Box>
        )}
      </Flex>
      <Flex
        height={isOpen ? height : '0px'}
        overflow={'hidden'}
        direction={'column'}
        style={{ transition: 'ease-in all .1s' }}
      >
        {menuItem.children?.map((children) => (
          <Flex
            gap={'23px'}
            pl={'70px'}
            py={'9px'}
            onClick={() => children?.path && navigate(children.path)}
            style={{
              cursor: 'pointer',
              borderRight: children?.path === location.pathname ? '4px red solid' : 'unset',
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

export default MenuItem;
