import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { supabase } from '@/infra/database';
import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';

interface AuthContextProps {
  session: Session | null;
  user_id: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userId, setUserId] = useState<string>('');

  const getSession = async (): Promise<void> => {
    if (userId) return;

    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    if (!authSession) {
      router.replace('/login/');
    }

    setUserId(authSession?.user?.id as string);

    setSession(authSession);
  };

  useEffect(() => {
    getSession();
  }, []);

  const sessionMemo = useMemo(
    () => ({ session, user_id: userId }),
    [session, userId],
  );

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, stateSession): void => {
      if (event === 'SIGNED_IN') {
        setSession(stateSession);
      }

      if (event === 'SIGNED_OUT') {
        setSession(null);
        router.replace('/login/');
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={sessionMemo}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => useContext(AuthContext);

export { useAuth, AuthProvider };
