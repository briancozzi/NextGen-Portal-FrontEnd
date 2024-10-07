import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import PageForm from '@components/PageManagement/PageForm';

const CreatePagePage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>{'Update Page Page'}</PageTitle>
      <PageForm />
    </Flex>
  );
};

export default CreatePagePage;
