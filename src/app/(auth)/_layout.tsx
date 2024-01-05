import { useEffect } from 'react';

import { supabase } from '@/infra/database';
import { Stack, router } from 'expo-router';

const AuthLayout: React.FC = () => {
  const getSession = async (): Promise<void> => {
    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    if (authSession) router.replace('/pomodoro/');
  };

  useEffect(() => {
    getSession();
  }, []);

  return <Stack screenOptions={{ headerShadowVisible: false }} />;
};

export default AuthLayout;
