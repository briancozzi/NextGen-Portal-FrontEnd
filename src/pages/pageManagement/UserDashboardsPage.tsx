import { Flex } from '@radix-ui/themes';
import PageHeader from '../../components/PageHeader';

const UserDashboardsPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageHeader>User Dashboard</PageHeader>
    </Flex>
  );
};

export default UserDashboardsPage;
