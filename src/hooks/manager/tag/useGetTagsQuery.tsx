import { getTags, GetTagsProps } from '@/services/manager';
import { useQuery } from '@tanstack/react-query';

export const useGetTagsQuery = ({ user_id }: GetTagsProps) =>
  useQuery({
    queryKey: ['tags[]'],
    queryFn: async () => {
      const { error, data } = await getTags({ user_id });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
  });
