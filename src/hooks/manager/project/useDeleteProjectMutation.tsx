import { queryClient } from '@/app/_layout';
import { deleteProject, DeleteProjectProps } from '@/services/manager';
import { useMutation } from '@tanstack/react-query';

export const useDeleteProjectMutation = () =>
  useMutation({
    mutationFn: async ({ user_id, id }: DeleteProjectProps) => {
      await deleteProject({ user_id, id });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects[]'] }),
  });
