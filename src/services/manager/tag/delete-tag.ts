import { supabase } from '@/infra/database';

export interface DeleteTagProps {
  user_id: string;
  id: number;
}

export const deleteTag = async ({
  user_id,
  id,
}: DeleteTagProps): Promise<void> => {
  await supabase.from('tags').delete().eq('user_id', user_id).eq('id', id);
};
