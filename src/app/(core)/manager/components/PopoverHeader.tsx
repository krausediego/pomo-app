import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import {
  HStack,
  Icon,
  IconButton,
  Popover,
  Pressable,
  Text,
  useDisclose,
} from 'native-base';

export const PopoverHeader: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Popover
      _backdrop={{ bg: 'black' }}
      crossOffset={-10}
      offset={-10}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger={triggerProps => (
        <IconButton
          mr="-20px"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="dots-vertical"
              size={7}
              color="title.500"
            />
          }
          {...triggerProps}
        />
      )}
      placement="bottom right">
      <Popover.Content bg="white" p={4} borderWidth="0" borderRadius="md">
        <Pressable
          onPress={() => {
            onClose();
            router.push('/manager/ManagerProjectAndTasks/');
          }}>
          <HStack alignItems="center" space={4}>
            <Icon as={MaterialCommunityIcons} name="toolbox-outline" />
            <Text>Gerenciar Projetos & Tags</Text>
          </HStack>
        </Pressable>
      </Popover.Content>
    </Popover>
  );
};
