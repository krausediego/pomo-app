import { Tables } from '@/@types';
import { supabase } from '@/infra/database';

export interface GetProjectsProps {
  user_id: string;
}

export const getProjects = async ({ user_id }: GetProjectsProps) => {
  return supabase
    .from('projects')
    .select()
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .returns<Tables<'projects'>[]>();
};
