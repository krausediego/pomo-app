import { TablesInsert } from '@/@types';
import { queryClient } from '@/app/_layout';
import { createTag } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useCreateTagMutation = () =>
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
