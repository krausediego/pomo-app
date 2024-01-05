import { LoginProps, login } from '@/services/auth';
import { Session, User } from '@supabase/supabase-js';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const useLoginMutation = (): UseMutationResult<
  {
    user: User | null;
    session: Session | null;
  },
  Error,
  LoginProps,
  unknown
> =>
  useMutation({
    mutationFn: async ({ email, password }: LoginProps) => {
      const { error, data } = await login({ email, password });

      if (error) throw new Error(error.message);

      return data;
    },
  });
