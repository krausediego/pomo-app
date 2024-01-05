import { supabase } from '@/infra/database';
import { AuthResponse } from '@supabase/supabase-js';

export interface LoginProps {
  email: string;
  password: string;
}

export const login = async ({
  email,
  password,
}: LoginProps): Promise<AuthResponse> => {
  return supabase.auth.signInWithPassword({ email, password });
};
