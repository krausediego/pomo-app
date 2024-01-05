import { useForm } from 'react-hook-form';

import { Input } from '@/components';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Stack } from 'expo-router';
import { Flex, Icon } from 'native-base';

import { PopoverFloatingButton, PopoverHeader } from './components';

const ManagerScreen: React.FC = () => {
  const { control } = useForm();

  return (
    <Flex bg="background.500" position="relative" flex={1}>
      <Stack.Screen
        options={{
          title: 'Focusify',
          headerRight: () => <PopoverHeader />,
        }}
      />
      <Input
        control={control}
        name="search"
        InputLeftElement={
          <Icon as={MaterialCommunityIcons} name="magnify" ml={4} size={6} />
        }
        placeholder="Buscar ..."
      />
      <PopoverFloatingButton />
    </Flex>
  );
};

export default ManagerScreen;
