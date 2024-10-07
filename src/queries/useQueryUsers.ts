import { getUsers } from '@api/users';
import { GetUsersRequest } from '@api/users/types';
import { USERS_QUERY_KEY } from '@queryKeys';
import { useQuery } from '@tanstack/react-query';

interface Props {
  request: GetUsersRequest;
}

const useQueryUsers = ({ request }: Props) => {
  return useQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: () => getUsers(request),
  });
};

export default useQueryUsers;
