import { Tables } from '@/@types';
import { queryClient } from '@/app/_layout';
import { deleteTag } from '@/services/manager';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const useDeleteTagMutation = (): UseMutationResult<
  void,
  Error,
  Pick<
    {
      created_at: string;
      id: number;
      tag_color: string;
      tag_name: string;
      updated_at: string | null;
      user_id: string;
    },
    'user_id' | 'id'
  >,
  unknown
> =>
  useMutation({
    mutationFn: async ({
      user_id,
      id,
    }: Pick<Tables<'tags'>, 'user_id' | 'id'>) => {
      await deleteTag({ user_id, id });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tags[]'] }),
  });
