import { Stack } from 'expo-router';
import { View } from 'native-base';

const NewProject: React.FC = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Novo projeto' }} />
    </View>
  );
};

export default NewProject;
