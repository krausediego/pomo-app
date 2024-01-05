import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Tables, TablesInsert } from '@/@types';
import { BallsColors, Input } from '@/components';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Icon, Text, VStack } from 'native-base';
import * as yup from 'yup';

const schema = yup.object().shape({
  project_name: yup
    .string()
    .min(4, 'O nome do projeto deve conter ao menos 4 caracteres')
    .required('O nome do projeto é obrigatório'),
});

interface FormNewProjectProps {
  colorSelected: string;
  setColorSelected: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitForm: SubmitHandler<
    Pick<TablesInsert<'projects'>, 'project_name'>
  >;
  isLoading: boolean;
  data?: Tables<'projects'>;
}

export const FormProject: React.FC<FormNewProjectProps> = ({
  colorSelected,
  setColorSelected,
  handleSubmitForm,
  isLoading,
  data,
}) => {
  const { control, handleSubmit, setValue } = useForm<
    Pick<TablesInsert<'projects'>, 'project_name'>
  >({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      setValue('project_name', data.project_name);
      setColorSelected(data.project_color);
    }
  }, [data]);

  const setColor = (color: string): void => {
    setColorSelected(color);
  };

  return (
    <>
      <VStack space={4}>
        <Input
          control={control}
          name="project_name"
          leftElement={
            <Icon
              as={MaterialCommunityIcons}
              name="toolbox-outline"
              size={6}
              ml={4}
              color="title.500"
            />
          }
          label="Nome do Projeto"
          placeholder="Nome do Projeto"
        />

        <Text fontWeight={600} color="title.500" fontSize="16px">
          Cor do Projeto
        </Text>

        <BallsColors colorSelected={colorSelected} func={setColor} />
      </VStack>

      <Button
        isLoading={isLoading}
        mb={6}
        onPress={handleSubmit(handleSubmitForm)}>
        {!data?.id ? 'Adicionar' : 'Atualizar'}
      </Button>
    </>
  );
};
