import { getPage } from '@api/pages';
import { GetPageRequest } from '@api/pages/types';
import { PAGE_QUERY_KEY } from '@queryKeys';
import { useQuery } from '@tanstack/react-query';

const useQueryPage = ({ id }: GetPageRequest) => {
  return useQuery({
    queryKey: [PAGE_QUERY_KEY, id],
    queryFn: () => getPage({ id }),
  });
};

export default useQueryPage;
