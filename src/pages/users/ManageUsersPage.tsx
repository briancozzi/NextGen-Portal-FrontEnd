import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import UserList from '@components/UserManagement/UserList';

const ManageUsersPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>Manage Users Page</PageTitle>
      <UserList />
    </Flex>
  );
};

export default ManageUsersPage;
