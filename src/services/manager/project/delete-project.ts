import { supabase } from '@/infra/database';

export interface DeleteProjectProps {
  id: number;
  user_id: string;
}

export const deleteProject = async ({
  user_id,
  id,
}: DeleteProjectProps): Promise<void> => {
  await supabase.from('projects').delete().eq('user_id', user_id).eq('id', id);
};
