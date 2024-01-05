import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { TablesInsert } from '@/@types';
import { useAuth } from '@/contexts';
import { useGetTagByIdQuery, useUpdateTagMutation } from '@/hooks/manager';
import {
  Stack,
  router,
  useLocalSearchParams,
  useNavigation,
} from 'expo-router';
import { Flex } from 'native-base';

import { FormTag } from './components/Form';

const EditTagScreen: React.FC = () => {
  const [colorSelected, setColorSelected] = useState('');

  const { id } = useLocalSearchParams<{ id: string }>();
  const { session } = useAuth();
  const navigation = useNavigation();

  const { data } = useGetTagByIdQuery(id);
  const { mutateAsync, isPending } = useUpdateTagMutation();

  const parentNavigation = navigation.getState().routes.length;

  const handleForm: SubmitHandler<
    Pick<TablesInsert<'tags'>, 'tag_name'>
  > = async ({ tag_name }): Promise<void> => {
    try {
      await mutateAsync({
        id: Number(id),
        tag_color: colorSelected,
        tag_name,
        user_id: session?.user?.id as string,
      });

      // eslint-disable-next-line no-unused-expressions
      parentNavigation > 2 ? router.back() : router.replace('/manager/');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Flex flex={1} bg="white" justifyContent="space-between">
      <Stack.Screen options={{ title: 'Editar tag' }} />

      <FormTag
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
        handleSubmitForm={handleForm}
        isLoading={isPending}
        data={data}
      />
    </Flex>
  );
};

export default EditTagScreen;
