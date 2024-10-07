import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';

const UserDashboardsPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>User Dashboard</PageTitle>
    </Flex>
  );
};

export default UserDashboardsPage;
