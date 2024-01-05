import { Button, HStack } from 'native-base';

interface ChangeTypeManagerButtonsProps {
  typeManager: 'project' | 'tag';
  changeType: (type: 'project' | 'tag') => void;
}

export const ChangeTypeManagerButtons: React.FC<
  ChangeTypeManagerButtonsProps
> = ({ changeType, typeManager }) => {
  const ButtonType = (type: 'project' | 'tag'): React.JSX.Element => {
    return (
      <Button
        onPress={() => changeType(type)}
        bg={typeManager === type ? 'primary.500' : 'gray.50'}
        w="50%"
        h="48px"
        borderRadius="6px"
        _text={{ color: typeManager === type ? 'white' : 'title.500' }}
        _pressed={{
          bg: 'none',
        }}
        _focus={{
          bg: 'none',
        }}>
        {type === 'project' ? 'Projetos' : 'Tags'}
      </Button>
    );
  };

  return (
    <HStack>
      {ButtonType('project')}
      {ButtonType('tag')}
    </HStack>
  );
};
