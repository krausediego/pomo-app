import { Tables } from '@/@types';
import { supabase } from '@/infra/database';

export const getTags = async ({ user_id }: Pick<Tables<'tags'>, 'user_id'>) => {
  return supabase
    .from('tags')
    .select()
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .returns<Tables<'tags'>>();
};
