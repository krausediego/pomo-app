import { Tables, TablesUpdate } from '@/@types';
import { supabase } from '@/infra/database';

export const updateTag = async (data: TablesUpdate<'tags'>) => {
  return supabase
    .from('tags')
    .update(data)
    .eq('id', data.id)
    .select()
    .returns<Tables<'tags'>>();
};
