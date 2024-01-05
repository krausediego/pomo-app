import { supabase } from '@/infra/database';

export interface GetTagByIdProps {
  id: string;
}

export const getTagById = ({ id }: GetTagByIdProps) => {
  return supabase.from('tags').select().eq('id', id).single();
};
