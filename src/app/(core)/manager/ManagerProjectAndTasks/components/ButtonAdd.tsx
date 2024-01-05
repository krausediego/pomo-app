import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { Button, Divider, Icon } from 'native-base';

interface ButtonAddProps {
  type: 'project' | 'tag';
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({ type }) => {
  return (
    <>
      <Button
        onPress={() => {
          router.push(
            type === 'project' ? '/manager/NewProject/' : '/manager/NewTag/',
          );
        }}
        leftIcon={<Icon as={MaterialCommunityIcons} name="plus" size={6} />}
        variant="link"
        _text={{ fontSize: '18px' }}>
        {`Adicionar ${type === 'project' ? 'projeto' : 'tag'}`}
      </Button>
      <Divider />
    </>
  );
};
