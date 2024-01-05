import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '@/components';
import { useLoginMutation } from '@/hooks/auth';
import { LoginProps } from '@/services/auth';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, router } from 'expo-router';
import { Button, Flex, Heading, Icon, Text } from 'native-base';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres.')
    .required(),
});

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginProps>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useLoginMutation();

  const formSubmit: SubmitHandler<LoginProps> = async (
    values,
  ): Promise<void> => {
    try {
      await mutateAsync(values);

      router.replace('/pomodoro/');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Flex flex={1} bg="white" justifyContent="space-between" safeAreaBottom>
      <Stack.Screen options={{ title: '' }} />
      <Flex>
        <Heading>Entre agora</Heading>
        <Text>Aumente a sua produtividade!</Text>
        <Input
          label="Email"
          control={control}
          name="email"
          leftElement={
            <Icon
              as={MaterialCommunityIcons}
              name="email-outline"
              size={6}
              ml={2}
            />
          }
        />
        <Input
          label="Password"
          control={control}
          name="password"
          leftElement={
            <Icon
              as={MaterialCommunityIcons}
              name="lock-outline"
              size={6}
              ml={2}
            />
          }
        />
      </Flex>
      <Button onPress={handleSubmit(formSubmit)}>Entrar</Button>
    </Flex>
  );
};

export default LoginScreen;
