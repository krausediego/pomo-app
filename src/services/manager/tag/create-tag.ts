import { TablesInsert } from '@/@types';
import { supabase } from '@/infra/database';

export const createTag = async ({
  user_id,
  tag_color,
  tag_name,
}: TablesInsert<'tags'>) => {
  return supabase
    .from('tags')
    .insert({ user_id, tag_color, tag_name })
    .returns<TablesInsert<'tags'>>();
};
