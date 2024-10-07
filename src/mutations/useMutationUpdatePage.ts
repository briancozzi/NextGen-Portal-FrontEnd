import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Page } from '@api/pages/types';
import { updatePage } from '@api/pages';
import { PAGE_QUERY_KEY } from '@queryKeys';

interface Params {
  onSuccess?: (page: Page) => void;
  onError?: () => void;
}

const useMutationUpdatePage = ({ onSuccess, onError }: Params) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (page: Page) => updatePage(page),
    onSuccess: (page: Page) => {
      queryClient.invalidateQueries({ queryKey: [PAGE_QUERY_KEY, page.id] });
      onSuccess?.(page);
    },
    onError,
  });
};

export default useMutationUpdatePage;
