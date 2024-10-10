import { Flex } from '@radix-ui/themes';
import EmptyPlaceholder from '@components/EmptyPlaceholder';

const DashboardPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} justify={'center'}>
      <EmptyPlaceholder />
    </Flex>
  );
};

export default DashboardPage;