import { LoginProps, login } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }: LoginProps) => {
      const { error, data } = await login({ email, password });

      if (error) throw new Error(error.message);

      return data;
    },
  });
