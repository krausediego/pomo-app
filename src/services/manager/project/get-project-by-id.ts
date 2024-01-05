import { supabase } from '@/infra/database';

export interface GetProjectByIdProps {
  id: string;
}

export const getProjectById = ({ id }: GetProjectByIdProps) => {
  return supabase.from('projects').select().eq('id', id).single();
};
