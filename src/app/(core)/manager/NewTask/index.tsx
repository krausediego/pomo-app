import { Stack } from 'expo-router';
import { Text, View } from 'native-base';

const NewTaskScreen: React.FC = () => {
  return (
    <View flex={1}>
      <Stack.Screen options={{ title: 'Nova tarefa' }} />
      <Text>New Task</Text>
    </View>
  );
};

export default NewTaskScreen;
