import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
  useToast,
} from 'native-base';

interface ToastContentProps {
  id: string;
  status: 'error' | 'success' | 'warning' | 'info';
  title: string;
  description?: string;
}

export const ToastContent: React.FC<ToastContentProps> = ({
  id,
  status,
  title,
  description,
}) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="80%"
      alignSelf="center"
      flexDirection="row"
      status={status}
      variant="solid">
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color="lightText">
              {title}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" />}
            _icon={{
              color: 'lightText',
            }}
            onPress={() => toast.close(id)}
          />
        </HStack>
        {description && (
          <Text px="6" color="lightText">
            {description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};
