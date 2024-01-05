import { queryClient } from '@/app/_layout';
import { deleteTag, DeleteTagProps } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useDeleteTagMutation = () =>
  useMutation({
    mutationFn: async ({ user_id, id }: DeleteTagProps) => {
      await deleteTag({ user_id, id });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tags[]'] }),
  });
