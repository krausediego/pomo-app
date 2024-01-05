import { getProjectById, GetProjectByIdProps } from '@/services/manager';
import { useQuery } from '@tanstack/react-query';

export const useGetProjectByIdQuery = ({ id }: GetProjectByIdProps) =>
  useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const { error, data } = await getProjectById({ id });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
  });
