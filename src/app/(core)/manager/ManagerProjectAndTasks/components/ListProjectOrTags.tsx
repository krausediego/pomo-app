import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Divider, Flex, HStack, Icon, Text } from 'native-base';

import { PopoverItemList } from './PopoverItemList';

interface ListProjectOrTagsProps {
  name: string;
  color: string;
  id: number;
  type: 'project' | 'tag';
}

export const ListProjectOrTags: React.FC<ListProjectOrTagsProps> = ({
  name,
  color,
  type,
  id,
}) => {
  return (
    <>
      <Flex
        flexDir="row"
        h="16"
        w="full"
        alignItems="center"
        justifyContent="space-between"
        px={3}>
        <HStack space={6} alignItems="center">
          <Icon
            as={MaterialCommunityIcons}
            name={type === 'project' ? 'toolbox' : 'tag'}
            color={color}
            size={7}
          />
          <Text fontWeight={600} color="title.500">
            {name}
          </Text>
        </HStack>

        <PopoverItemList id={id} type={type} />
      </Flex>
      <Divider w="full" />
    </>
  );
};
