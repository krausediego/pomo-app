import { useCallback } from 'react';

import { theme } from '@/theme';
import { fonts } from '@/theme/fonts';
import { useFonts } from '@expo-google-fonts/urbanist';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider, View } from 'native-base';

SplashScreen.preventAutoHideAsync();

export const queryClient = new QueryClient();

const RootLayout: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <View flex={1} paddingX="16px" onLayout={onLayoutRootView}>
          <Slot />
        </View>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
