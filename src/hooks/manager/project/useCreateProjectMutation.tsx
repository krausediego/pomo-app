import { TablesInsert } from '@/@types';
import { queryClient } from '@/app/_layout';
import { createProject } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useCreateProjectMutation = () =>
  useMutation({
    mutationFn: async ({
      project_name,
      project_color,
      user_id,
    }: TablesInsert<'projects'>) => {
      const { error, data } = await createProject({
        project_name,
        project_color,
        user_id,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: async () =>
      queryClient.invalidateQueries({ queryKey: ['projects[]'] }),
  });
