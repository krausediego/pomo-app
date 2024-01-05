import { useForm } from 'react-hook-form';
import { Pressable } from 'react-native';

import { Input } from '@/components';
import { Flex, Text, VStack } from 'native-base';

export const FormTask: React.FC = () => {
  const { control } = useForm();

  const quantityPomodors = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <VStack space={4}>
      <Input
        control={control}
        name="task_name"
        label="Nome da tarefa"
        placeholder="Nome da tarefa"
      />

      <VStack space={2}>
        <Text>Quantidade de pomodoros</Text>
        <Flex flexDir="row" justifyContent="space-around">
          {quantityPomodors.map(el => {
            return (
              <Pressable key={el}>
                <Text fontWeight={600} color="title.500">
                  {el}
                </Text>
              </Pressable>
            );
          })}
        </Flex>
      </VStack>
    </VStack>
  );
};
