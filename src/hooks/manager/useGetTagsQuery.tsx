import { getTags } from '@/services/manager';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

interface useGetTagsQueryProps {
  user_id: string;
  enabled?: boolean;
}

export const useGetTagsQuery = ({
  user_id,
  enabled = true,
}: useGetTagsQueryProps): UseQueryResult<
  {
    created_at: string;
    id: number;
    tag_color: string;
    tag_name: string;
    updated_at: string | null;
    user_id: string;
  }[],
  Error
> =>
  useQuery({
    queryKey: ['tags[]'],
    queryFn: async () => {
      const { error, data } = await getTags({ user_id });

      if (error) {
        throw new Error(error?.message);
      }

      return data;
    },
    enabled,
  });
