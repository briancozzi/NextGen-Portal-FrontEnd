import { getUser } from '@api/users';
import { GetUserRequest } from '@api/users/types';
import { USER_QUERY_KEY } from '@queryKeys';
import { useQuery } from '@tanstack/react-query';

const useQueryUser = ({ id }: GetUserRequest) => {
  return useQuery({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () => getUser({ id }),
  });
};

export default useQueryUser;
