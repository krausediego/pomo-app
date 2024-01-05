import { Tables } from '@/@types';
import { supabase } from '@/infra/database';

export interface GetTagsProps {
  user_id: string;
}

export const getTags = async ({ user_id }: GetTagsProps) => {
  return supabase
    .from('tags')
    .select()
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .returns<Tables<'tags'>[]>();
};
