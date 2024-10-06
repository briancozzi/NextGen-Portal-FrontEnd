import { Avatar, Flex, Text } from '@radix-ui/themes';
import Search from './Search';
import Notification from './Notification';
import { IconArrow } from '@icons';
import { useQueryUser } from '@queries';

const Topbar = () => {
  const query = useQueryUser({ id: 1 });

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
        <Avatar src={query?.data?.photo} fallback={query?.data?.middleInitial ?? 'A'} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
