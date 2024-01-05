import { getProjects, GetProjectsProps } from '@/services/manager';
import { useQuery } from '@tanstack/react-query';

export const useGetProjectsQuery = ({ user_id }: GetProjectsProps) =>
  useQuery({
    queryKey: ['projects[]'],
    queryFn: async () => {
      const { error, data } = await getProjects({ user_id });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
  });
