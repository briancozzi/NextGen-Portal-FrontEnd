import { useMutation } from '@tanstack/react-query';
import { Page } from '@api/pages/types';
import { updatePage } from '@api/pages';

interface Params {
  onSuccess?: (page: Page) => void;
  onError?: () => void;
}

const useMutationUpdatePage = ({ onSuccess, onError }: Params) => {
  return useMutation({
    mutationFn: (page: Page) => updatePage(page),
    onSuccess: (page: Page) => onSuccess?.(page),
    onError,
  });
};

export default useMutationUpdatePage;
