import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { TablesInsert } from '@/@types';
import { ToastContent } from '@/components';
import { useAuth } from '@/contexts';
import { useCreateTagMutation } from '@/hooks/manager';
import { Stack, router, useNavigation } from 'expo-router';
import { Flex, useToast } from 'native-base';

import { FormTag } from './components/Form';

const NewTagScreen: React.FC = () => {
  const [colorSelected, setColorSelected] = useState('');

  const toast = useToast();
  const { session } = useAuth();
  const navigation = useNavigation();
  const { mutateAsync, isPending } = useCreateTagMutation();

  const parentNavigation = navigation.getState().routes.length;

  const handleForm: SubmitHandler<
    Pick<TablesInsert<'tags'>, 'tag_name'>
  > = async ({ tag_name }): Promise<void> => {
    try {
      await mutateAsync({
        tag_color: colorSelected,
        tag_name,
        user_id: session?.user?.id as string,
      });

      toast.show({
        placement: 'top',
        render: ({ id }) => {
          return (
            <ToastContent id={id} status="success" title="Registro criado" />
          );
        },
      });

      // eslint-disable-next-line no-unused-expressions
      parentNavigation > 2 ? router.back() : router.replace('/manager/');
    } catch (error: any) {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          return (
            <ToastContent
              id={id}
              status="success"
              title="Erro"
              description={error}
            />
          );
        },
      });
    }
  };

  return (
    <Flex flex={1} bg="white" justifyContent="space-between">
      <Stack.Screen options={{ title: 'Nova tag' }} />

      <FormTag
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
        handleSubmitForm={handleForm}
        isLoading={isPending}
      />
    </Flex>
  );
};

export default NewTagScreen;
