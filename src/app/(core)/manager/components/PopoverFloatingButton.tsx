import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import {
  Divider,
  HStack,
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
            colorScheme="light"
            onPress={() => {
              onClose();
              router.push('/manager/NewTask/');
            }}>
            <HStack space={2} alignItems="center">
              <Icon as={MaterialCommunityIcons} name="file-plus-outline" />
              <Text>Tarefa</Text>
            </HStack>
          </Pressable>
          <Divider />
          <Pressable
            w="full"
            h={10}
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            colorScheme="light"
            variant="ghost"
            onPress={() => {
              onClose();
              router.push('/manager/NewProject/');
            }}>
            <HStack space={2} alignItems="center">
              <Icon as={MaterialCommunityIcons} name="toolbox-outline" />
              <Text>Projeto</Text>
            </HStack>
          </Pressable>
          <Divider />
          <Pressable
            w="full"
            h={10}
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            variant="ghost"
            colorScheme="light"
            onPress={() => {
              onClose();
              router.push('/manager/NewTag/');
            }}>
            <HStack space={2} alignItems="center">
              <Icon as={MaterialCommunityIcons} name="tag-outline" />
              <Text>Tag</Text>
            </HStack>
          </Pressable>
        </Popover.Content>
      </Popover>
    </View>
  );
};
