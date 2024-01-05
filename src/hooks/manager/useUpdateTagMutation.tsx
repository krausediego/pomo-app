import { TablesUpdate } from '@/@types';
import { queryClient } from '@/app/_layout';
import { updateTag } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useUpdateTagMutation = () =>
  useMutation({
    mutationFn: async ({ id, tag_name, tag_color }: TablesUpdate<'tags'>) => {
      const { error, data } = await updateTag({ id, tag_name, tag_color });

      if (error) {
        throw new Error(error?.message);
      }

      console.log('DATA', data);

      return data;
    },
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries({ queryKey: ['tags[]'] });
      queryClient.invalidateQueries({ queryKey: ['tag', id] });
    },
  });
