import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '@api/users/types';
import { updateUser } from '@api/users';
import { USERS_QUERY_KEY } from '@queryKeys';

interface Params {
  onSuccess?: () => void;
  onError?: () => void;
}

const useMutationUpdateUser = ({ onSuccess, onError }: Params) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });
      onSuccess?.();
    },
    onError,
  });
};

export default useMutationUpdateUser;
