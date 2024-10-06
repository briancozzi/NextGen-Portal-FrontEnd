import { Flex } from '@radix-ui/themes';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <Flex width={'100%'} height={'100vh'} direction={'row'}>
      <Sidebar />
      <Flex direction={'column'} flexGrow={'1'}>
        <Topbar />
        <Flex
          px={'3'}
          pt={'3'}
          flexGrow={'1'}
          height={'calc(100% - 82px)'}
          overflow={'auto'}
          style={{ backgroundColor: '#FAFAFA' }}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
