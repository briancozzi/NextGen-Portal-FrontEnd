import { Flex } from '@radix-ui/themes';
import UserRow from './UserRow';
import Search from '@components/Topbar/Search';
import { useQueryUsers } from '@queries';
import { useEffect, useState } from 'react';

const UserList = () => {
  const [keyword, setKeyword] = useState('');
  const query = useQueryUsers({ request: { filters: { keyword } } });

  useEffect(() => {
    query.refetch();
  }, [keyword, query]);

  const handleChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <Flex direction={'column'} pt={'4'} gap={'4'}>
      <Search value={keyword} onChange={handleChangeKeyword} />
      <Flex direction={'column'} gap={'3'}>
        {query.data?.map((user) => (
          <UserRow user={user} />
        ))}
      </Flex>
    </Flex>
  );
};

export default UserList;
