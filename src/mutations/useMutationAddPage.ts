import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Page } from '@api/pages/types';
import { addPage } from '@api/pages';
import { PAGES_QUERY_KEY } from '@queryKeys';

interface Params {
  onSuccess?: () => void;
  onError?: () => void;
}

const useMutationAddPage = ({ onSuccess, onError }: Params) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (page: Page) => addPage(page),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAGES_QUERY_KEY] });
      onSuccess?.();
    },
    onError,
  });
};

export default useMutationAddPage;
