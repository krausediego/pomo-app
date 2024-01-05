import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { TablesInsert } from '@/@types';
import { useAuth } from '@/contexts';
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from '@/hooks/manager';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Flex, Skeleton } from 'native-base';

import { FormProject } from './components/Form';

const EditProjectScreen: React.FC = () => {
  const [colorSelected, setColorSelected] = useState('');

  const { id } = useLocalSearchParams<{ id: string }>();
  const { session } = useAuth();

  const { data, isPending: isLoadingGet } = useGetProjectByIdQuery({ id });
  const { mutateAsync, isPending } = useUpdateProjectMutation();

  const handleForm: SubmitHandler<
    Pick<TablesInsert<'projects'>, 'project_name'>
  > = async ({ project_name }): Promise<void> => {
    try {
      await mutateAsync({
        id: Number(id),
        project_color: colorSelected,
        project_name,
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
      <Stack.Screen options={{ title: 'Editar projeto' }} />

      <FormProject
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
        handleSubmitForm={handleForm}
        isLoading={isPending}
        data={data}
      />
    </Flex>
  );
};

export default EditProjectScreen;
