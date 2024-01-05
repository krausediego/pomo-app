import { TablesUpdate } from '@/@types';
import { queryClient } from '@/app/_layout';
import { updateProject } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProjectMutation = () =>
  useMutation({
    mutationFn: async ({
      id,
      project_name,
      project_color,
    }: TablesUpdate<'projects'>) => {
      const { error, data } = await updateProject({
        id,
        project_name,
        project_color,
      });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries({ queryKey: ['projects[]'] });
      queryClient.invalidateQueries({ queryKey: ['project', id] });
    },
  });
