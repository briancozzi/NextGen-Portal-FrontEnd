import { getPage } from '@api/pages';
import { GetPageRequest } from '@api/pages/types';
import { USER_QUERY_KEY } from '@queryKeys';
import { useQuery } from '@tanstack/react-query';

const useQueryPage = ({ id }: GetPageRequest) => {
  return useQuery({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () => getPage({ id }),
  });
};

export default useQueryPage;
