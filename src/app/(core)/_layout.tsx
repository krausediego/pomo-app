import { AuthProvider } from '@/contexts';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { Icon, Text, useTheme } from 'native-base';

const CoreLayout: React.FC = () => {
  const { colors } = useTheme();

  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary[500],
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tabs.Screen
          name="pomodoro"
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'clock-time-five' : 'clock-time-five-outline'}
                color={color}
                size={size}
              />
            ),
            tabBarLabel: ({ children, color, focused }) => (
              <Text
                color={color}
                fontWeight={focused ? 700 : 500}
                fontSize="xs">
                {children}
              </Text>
            ),
            title: 'Pomodoro',
          }}
        />
        <Tabs.Screen
          name="manager"
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                color={color}
                size={size}
              />
            ),
            tabBarLabel: ({ children, color, focused }) => (
              <Text
                color={color}
                fontWeight={focused ? 700 : 500}
                fontSize="xs">
                {children}
              </Text>
            ),
            title: 'Gerenciar',
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'calendar-month' : 'calendar-month-outline'}
                color={color}
                size={size}
              />
            ),
            tabBarLabel: ({ children, color, focused }) => (
              <Text
                color={color}
                fontWeight={focused ? 700 : 500}
                fontSize="xs">
                {children}
              </Text>
            ),
            title: 'Calendário',
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'chart-box' : 'chart-box-outline'}
                color={color}
                size={size}
              />
            ),
            tabBarLabel: ({ children, color, focused }) => (
              <Text
                color={color}
                fontWeight={focused ? 700 : 500}
                fontSize="xs">
                {children}
              </Text>
            ),
            title: 'Relatórios',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'cog' : 'cog-outline'}
                color={color}
                size={size}
              />
            ),
            tabBarLabel: ({ children, color, focused }) => (
              <Text
                color={color}
                fontWeight={focused ? 700 : 500}
                fontSize="xs">
                {children}
              </Text>
            ),
            title: 'Definições',
          }}
        />
      </Tabs>
    </AuthProvider>
  );
};

export default CoreLayout;
