import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import {
  Divider,
  Icon,
  IconButton,
  Popover,
  Pressable,
  Text,
  View,
  useDisclose,
} from 'native-base';

export const PopoverFloatingButton: React.FC = () => {
  const { onClose, isOpen, onOpen } = useDisclose();

  return (
    <View position="absolute" right={2} bottom={2}>
      <Popover
        _backdrop={{ bg: 'black' }}
        crossOffset={-10}
        offset={6}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        placement="top right"
        trigger={trigger => (
          <IconButton
            bg="primary.500"
            w="50px"
            height="50px"
            borderRadius="50px"
            {...trigger}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="plus"
                color="white"
                size={8}
              />
            }
          />
        )}>
        <Popover.Content bg="white" px="10px" py="4px">
          <Pressable
            w="full"
            h={10}
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            variant="ghost"
            gap={2}
            colorScheme="light">
            <Icon as={MaterialCommunityIcons} name="file-plus-outline" />
            <Text>Tarefa</Text>
          </Pressable>
          <Divider />
          <Pressable
            w="full"
            h={10}
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap={2}
            colorScheme="light"
            variant="ghost">
            <Icon as={MaterialCommunityIcons} name="toolbox-outline" />
            <Text>Projeto</Text>
          </Pressable>
          <Divider />
          <Pressable
            w="full"
            h={10}
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            variant="ghost"
            gap={2}
            colorScheme="light"
            onPress={() => {
              onClose();
              router.push('/manager/NewTag/');
            }}>
            <Icon as={MaterialCommunityIcons} name="tag-outline" />
            <Text>Tag</Text>
          </Pressable>
        </Popover.Content>
      </Popover>
    </View>
  );
};
