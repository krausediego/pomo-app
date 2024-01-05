import { getTagById, GetTagByIdProps } from '@/services/manager';
import { useQuery } from '@tanstack/react-query';

export const useGetTagByIdQuery = ({ id }: GetTagByIdProps) =>
  useQuery({
    queryKey: ['tag', id],
    queryFn: async () => {
      const { error, data } = await getTagById({ id });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
  });
