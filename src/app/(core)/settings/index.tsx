import { supabase } from '@/infra/database';
import { router } from 'expo-router';
import { Button, View } from 'native-base';

const SettingsScreen: React.FC = () => {
  const a = async () => {
    await supabase.auth.signOut();
    router.replace('/(auth)/login');
  };

  return (
    <View>
      <Button onPress={a}>Logout</Button>
    </View>
  );
};

export default SettingsScreen;
