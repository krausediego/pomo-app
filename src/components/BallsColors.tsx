import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Flex, Pressable, Icon } from 'native-base';

interface BallsColorsProps {
  func: (color: string) => void;
  colorSelected: string;
}

export const BallsColors: React.FC<BallsColorsProps> = ({
  func,
  colorSelected,
}) => {
  const colors = [
    '#F54336',
    '#EA1D61',
    '#9D28AC',
    '#673AB3',
    '#3F51B2',
    '#1A96F0',
    '#00A9F2',
    '#00BCD3',
    '#009689',
    '#4AAF57',
    '#8BC255',
    '#CDDC4C',
    '#FFEB4F',
    '#FFC02D',
    '#FF981F',
    '#FF5726',
    '#7A5548',
    '#607D8A',
    '#FF6347',
    '#FF47FF',
  ];

  return (
    <Flex
      flexDir="row"
      display="inline-flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={6}>
      {colors.map(color => {
        return (
          <Pressable
            key={color}
            onPress={() => func(color)}
            w="60px"
            h="60px"
            justifyContent="center"
            alignItems="center"
            borderRadius="60px"
            borderWidth={colorSelected === color ? 3 : 0}
            borderColor="gray.500"
            bg={color}>
            {colorSelected === color && (
              <Icon
                as={MaterialCommunityIcons}
                name="check"
                color="white"
                size={8}
              />
            )}
          </Pressable>
        );
      })}
    </Flex>
  );
};
