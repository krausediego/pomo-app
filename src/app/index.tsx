import { Redirect, router } from 'expo-router';
import { Button, Flex, Text } from 'native-base';

const RootScreen: React.FC = () => {
  return <Redirect href="/login/" />;
};

export default RootScreen;
