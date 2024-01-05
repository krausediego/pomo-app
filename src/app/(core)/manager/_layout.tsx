import { Stack } from 'expo-router';

const ManagerLayout: React.FC = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}
    />
  );
};

export default ManagerLayout;
