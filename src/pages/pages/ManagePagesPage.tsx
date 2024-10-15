import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import PageList from '@components/PageManagement/PageList';

const ManagePagesPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>Manage Pages</PageTitle>
      <PageList />
    </Flex>
  );
};

export default ManagePagesPage;
