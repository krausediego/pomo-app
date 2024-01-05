import { useState } from 'react';

import { useAuth } from '@/contexts';
import {
  useDeleteProjectMutation,
  useDeleteTagMutation,
} from '@/hooks/manager';
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

  const { mutateAsync: mutateTagAsync, isPending: isTagPending } =
    useDeleteTagMutation();
  const { mutateAsync: mutateProjectAsync, isPending: isProjectPending } =
    useDeleteProjectMutation();

  const handleDeleteProject = async (): Promise<void> => {
    let timeClick;
    if (!clickDelete) {
      setClickDelete(true);
      timeClick = setTimeout(() => {
        setClickDelete(false);
      }, 5000);
    } else {
      if (timeClick) clearTimeout(timeClick);
      try {
        mutateProjectAsync({ id, user_id });
      } catch (error) {
        console.error(error);
      }
    }
  };

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
        mutateTagAsync({ id, user_id });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = () => {
    onClose();
    router.push(
      type === 'project'
        ? `/manager/NewProject/${id}`
        : `/manager/NewTag/${id}`,
    );
  };

  return (
    <Popover
      _backdrop={{ bg: 'black' }}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={() => (!isTagPending || !isProjectPending) && onClose()}
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
        <Button
          isDisabled={isTagPending || isProjectPending}
          onPress={handleEdit}
          variant="unstyled">
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
          isLoading={isTagPending || isProjectPending}
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
