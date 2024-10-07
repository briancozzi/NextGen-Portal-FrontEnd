import { Avatar, Flex, Text } from '@radix-ui/themes';
import Search from './Search';
import Notification from './Notification';
import { IconArrow } from '@icons';
import { useCurrentUser } from '@components/common/hooks';

const Topbar = () => {
  const user = useCurrentUser();

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
        <Avatar src={user?.photo} fallback={user?.middleInitial ?? 'A'} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
