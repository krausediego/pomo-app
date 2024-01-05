import { Controller } from 'react-hook-form';

import { IInputProps, Input as IInput, FormControl } from 'native-base';

interface InputProps extends IInputProps {
  label?: string;
  control?: any;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ref },
        fieldState: { invalid, error },
      }) => {
        return (
          <FormControl isInvalid={invalid}>
            {label && (
              <FormControl.Label
                _text={{
                  fontWeight: 600,
                  color: 'title.500',
                  fontSize: '16px',
                }}>
                {label}
              </FormControl.Label>
            )}
            <IInput
              ref={ref}
              value={value}
              bg="#FAFAFA"
              h="65px"
              borderColor="gray.50"
              fontSize={20}
              color="title.500"
              fontWeight={500}
              onChangeText={onChange}
              autoCapitalize="none"
              autoCorrect={false}
              _focus={{ bg: '#FAFAFA', borderColor: 'gray.50' }}
              {...rest}
            />
            {!!error && (
              <FormControl.ErrorMessage>
                {error?.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        );
      }}
    />
  );
};
