import { TablesInsert } from '@/@types';
import { supabase } from '@/infra/database';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export const createTag = async ({
  user_id,
  tag_color,
  tag_name,
}: TablesInsert<'tags'>): Promise<
  PostgrestSingleResponse<TablesInsert<'tags'>>
> => {
  return supabase
    .from('tags')
    .insert({ user_id, tag_color, tag_name })
    .returns<TablesInsert<'tags'>>();
};
