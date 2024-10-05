import { Avatar, Flex, Text } from '@radix-ui/themes';
import Search from './Search';
import Notification from './Notification';
import { IconArrow } from '@icons';

const Topbar = () => {
  return (
    <Flex width={'100%'} px={'36px'} py={'20px'} justify={'between'} align={'center'} gap={'3'}>
      <Flex gap={'2'}>
        <Text weight={'bold'} size={'6'}>
          {'Admin Center'}
        </Text>
        <Flex align={'center'}>
          <IconArrow />
        </Flex>
      </Flex>
      <Flex flexGrow={'1'} direction={'column'} maxWidth={'528px'}>
        <Search />
      </Flex>
      <Flex gap={'2'}>
        <Notification />
        <Avatar
          src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
          fallback='A'
        />
      </Flex>
    </Flex>
  );
};

export default Topbar;
