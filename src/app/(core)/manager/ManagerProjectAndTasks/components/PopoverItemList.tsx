import { useState } from 'react';

import { useAuth } from '@/contexts';
import { useDeleteTagMutation } from '@/hooks/manager';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import {
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Popover,
  Text,
  useDisclose,
} from 'native-base';

interface PopoverItemListProps {
  id: number;
  type: 'project' | 'tag';
}

export const PopoverItemList: React.FC<PopoverItemListProps> = ({
  id,
  type,
}) => {
  const [clickDelete, setClickDelete] = useState(false);

  const { isOpen, onClose, onOpen } = useDisclose();
  const { user_id } = useAuth();

  const { mutateAsync, isPending } = useDeleteTagMutation();

  const handleDeleteProject = async (): Promise<void> => {};

  const handleDeleteTag = async (): Promise<void> => {
    let timeClick;
    if (!clickDelete) {
      setClickDelete(true);
      timeClick = setTimeout(() => {
        setClickDelete(false);
      }, 5000);
    } else {
      if (timeClick) clearTimeout(timeClick);
      try {
        mutateAsync({ id, user_id });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = () => {
    onClose();
    router.push(
      type === 'project' ? '/manager/NewProject/' : `/manager/NewTag/${id}`,
    );
  };

  return (
    <Popover
      _backdrop={{ bg: 'black' }}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={() => !isPending && onClose()}
      placement="bottom right"
      crossOffset={-15}
      offset={-10}
      trigger={triggerProps => {
        return (
          <IconButton
            {...triggerProps}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="dots-vertical"
                size={7}
                color="title.500"
              />
            }
          />
        );
      }}>
      <Popover.Content bg="white" borderWidth="0" p={2}>
        <Button isDisabled={isPending} onPress={handleEdit} variant="unstyled">
          <HStack space={2} alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name="pencil-outline"
              size={6}
              color="title.500"
            />
            <Text color="title.500" fontWeight={600}>
              Editar
            </Text>
          </HStack>
        </Button>
        <Divider />
        <Button
          isLoading={isPending}
          isLoadingText="Excluindo"
          variant="unstyled"
          onPress={type === 'project' ? handleDeleteProject : handleDeleteTag}>
          <HStack space={2} alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name="trash-can-outline"
              size={6}
              color="red.500"
            />
            <Text color="red.500" fontWeight={600}>
              {clickDelete ? 'Confirma ?' : 'Excluir'}
            </Text>
          </HStack>
        </Button>
      </Popover.Content>
    </Popover>
  );
};
