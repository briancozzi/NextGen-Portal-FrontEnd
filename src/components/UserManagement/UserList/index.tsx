import { User } from '@api/db';
import { Flex } from '@radix-ui/themes';
import UserRow from './UserRow';
import Search from '@components/Topbar/Search';

interface Props {
  users?: Array<User>;
}

const UserList = ({ users }: Props) => {
  return (
    <Flex direction={'column'} pt={'4'} gap={'4'}>
      <Search />
      <Flex direction={'column'} gap={'3'}>
        {users?.map((user) => (
          <UserRow user={user} />
        ))}
      </Flex>
    </Flex>
  );
};

export default UserList;
