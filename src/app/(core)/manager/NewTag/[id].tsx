import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { TablesInsert } from '@/@types';
import { useAuth } from '@/contexts';
import { useGetTagByIdQuery, useUpdateTagMutation } from '@/hooks/manager';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Flex, Skeleton } from 'native-base';

import { FormTag } from './components/Form';

const EditTagScreen: React.FC = () => {
  const [colorSelected, setColorSelected] = useState('');

  const { id } = useLocalSearchParams<{ id: string }>();
  const { session } = useAuth();

  const { data, isPending: isLoadingGet } = useGetTagByIdQuery({ id });
  const { mutateAsync, isPending } = useUpdateTagMutation();

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

      router.back();
    } catch (error: any) {
      console.error(error);
    }
  };

  if (isLoadingGet) {
    <Flex flex={1} bg="white" justifyContent="space-between">
      <Skeleton />
    </Flex>;
  }

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
