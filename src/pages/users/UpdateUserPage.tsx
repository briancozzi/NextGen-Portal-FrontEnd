import { Flex } from '@radix-ui/themes';
import PageTitle from '@components/PageTitle';
import UserForm from '@components/UserManagement/UserForm';
import { useQueryUser } from '@queries';

import { useParams } from 'react-router-dom';

const UpdateUserPage = () => {
  const { id } = useParams();

  const query = useQueryUser({ id: Number(id) });
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageTitle>{'Update User Page'}</PageTitle>
      <UserForm user={query?.data} />
    </Flex>
  );
};

export default UpdateUserPage;
