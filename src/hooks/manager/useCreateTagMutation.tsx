import { TablesInsert } from '@/@types';
import { queryClient } from '@/app/_layout';
import { createTag } from '@/services/manager';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const useCreateTagMutation = (): UseMutationResult<
  {
    created_at?: string | undefined;
    id?: number | undefined;
    tag_color: string;
    tag_name: string;
    updated_at?: string | null | undefined;
    user_id: string;
  },
  Error,
  {
    created_at?: string | undefined;
    id?: number | undefined;
    tag_color: string;
    tag_name: string;
    updated_at?: string | null | undefined;
    user_id: string;
  },
  unknown
> =>
  useMutation({
    mutationFn: async ({
      tag_color,
      tag_name,
      user_id,
    }: TablesInsert<'tags'>) => {
      const { error, data } = await createTag({ tag_color, tag_name, user_id });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: async () =>
      queryClient.invalidateQueries({ queryKey: ['tags[]'] }),
  });
