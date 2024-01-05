import { Tables, TablesUpdate } from '@/@types';
import { supabase } from '@/infra/database';

export const updateProject = async (data: TablesUpdate<'projects'>) => {
  return supabase
    .from('projects')
    .update(data)
    .eq('id', data.id)
    .select()
    .returns<Tables<'projects'>>();
};
