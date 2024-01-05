import { Tables } from '@/@types';
import { supabase } from '@/infra/database';

export const deleteTag = async ({
  user_id,
  id,
}: Pick<Tables<'tags'>, 'user_id' | 'id'>): Promise<void> => {
  await supabase.from('tags').delete().eq('user_id', user_id).eq('id', id);
};
