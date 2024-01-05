import { Stack } from 'expo-router';
import { View } from 'native-base';

import { FormTask } from './components/Form';

const NewTaskScreen: React.FC = () => {
  return (
    <View flex={1} bg="white">
      <Stack.Screen options={{ title: 'Nova tarefa' }} />

      <FormTask />
    </View>
  );
};

export default NewTaskScreen;
