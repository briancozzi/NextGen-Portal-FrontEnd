import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import UserForm from '@components/UserManagement/UserForm';

const CreateUserPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>Create User Page</PageTitle>
      <UserForm />
    </Flex>
  );
};

export default CreateUserPage;
