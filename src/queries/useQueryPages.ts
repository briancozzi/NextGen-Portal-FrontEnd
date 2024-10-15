import { getPages } from '@api/pages';
import { GetPagesRequest } from '@api/pages/types';
import { PAGES_QUERY_KEY } from '@queryKeys';
import { useQuery } from '@tanstack/react-query';

interface Props {
  request: GetPagesRequest;
}

const useQueryPages = ({ request }: Props) => {
  return useQuery({
    queryKey: [PAGES_QUERY_KEY],
    queryFn: () => getPages(request),
  });
};

export default useQueryPages;
