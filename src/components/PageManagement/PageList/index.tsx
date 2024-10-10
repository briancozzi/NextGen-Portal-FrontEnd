import { Flex, Text } from '@radix-ui/themes';
import PageRow from './PageRow';
import Search from '@components/Topbar/Search';
import { useQueryPages } from '@queries';
import { useEffect, useState } from 'react';

const PageList = () => {
  const [keyword, setKeyword] = useState('');
  const query = useQueryPages({ request: { filters: { keyword } } });

  useEffect(() => {
    query.refetch();
  }, [keyword, query]);

  const handleChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <Flex direction={'column'} pt={'4'} px={'5'} gap={'4'}>
      <Search value={keyword} onChange={handleChangeKeyword} />
      <Flex direction={'column'} gap={'3'}>
        {query.data?.map((page) => (
          <PageRow page={page} />
        ))}
        {!query.data?.length && (
          <Flex width={'100%'} justify={'center'}>
            <Text weight={'medium'} color={'red'}>
              {'No pages found. Please use a different keyword'}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default PageList;
