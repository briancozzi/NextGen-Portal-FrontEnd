import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@api/users';
import UserList from '@components/UserManagement/UserList';

const ManageUsersPage = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: getUsers });

  // console.log({ users: query.data });
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>Manage Users Page</PageTitle>
      <UserList users={query.data} />
    </Flex>
  );
};

export default ManageUsersPage;
