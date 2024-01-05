import { TablesInsert, Tables } from '@/@types';
import { supabase } from '@/infra/database';

export const createProject = async ({
  user_id,
  project_name,
  project_color,
}: TablesInsert<'projects'>) => {
  return supabase
    .from('projects')
    .insert({ user_id, project_name, project_color })
    .returns<Tables<'projects'>>();
};
