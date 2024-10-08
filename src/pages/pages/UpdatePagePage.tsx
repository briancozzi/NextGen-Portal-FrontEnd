import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import PageForm from '@components/PageManagement/PageForm';
import { useQueryPage } from '@queries';
import { useParams } from 'react-router-dom';

const UpdatePagePage = () => {
  const { id } = useParams();

  const query = useQueryPage({ id: Number(id) });

  console.log({ data: query?.data });

  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>{'Update Page'}</PageTitle>
      <PageForm page={query?.data} />
    </Flex>
  );
};

export default UpdatePagePage;
