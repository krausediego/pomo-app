import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Tables, TablesInsert } from '@/@types';
import { BallsColors, Input } from '@/components';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Icon, Text, VStack } from 'native-base';
import * as yup from 'yup';

const schema = yup.object().shape({
  tag_name: yup
    .string()
    .min(4, 'O nome da tag deve conter ao menos 4 caracteres')
    .required('O nome da tag é obrigatório'),
});

interface FormNewTagProps {
  colorSelected: string;
  setColorSelected: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitForm: SubmitHandler<Pick<TablesInsert<'tags'>, 'tag_name'>>;
  isLoading: boolean;
  data?: Tables<'tags'>;
}

export const FormTag: React.FC<FormNewTagProps> = ({
  colorSelected,
  setColorSelected,
  handleSubmitForm,
  isLoading,
  data,
}) => {
  const { control, handleSubmit, setValue } = useForm<
    Pick<TablesInsert<'tags'>, 'tag_name'>
  >({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      setValue('tag_name', data.tag_name);
      setColorSelected(data.tag_color);
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
          name="tag_name"
          leftElement={
            <Icon
              as={MaterialCommunityIcons}
              name="tag-outline"
              size={6}
              ml={4}
              color="title.500"
            />
          }
          label="Nome da Tag"
          placeholder="Nome da Tag"
        />

        <Text fontWeight={600} color="title.500" fontSize="16px">
          Cor da Tag
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
