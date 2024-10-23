import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon from react-native-vector-icons
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import ShortlistedScreen from './screens/ShortlistedScreen';

// Create a new QueryClient instance
const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* Wrap the app in the QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';  // Home icon
                } else if (route.name === 'Shortlisted') {
                  iconName = 'favorite';  // Shortlisted icon
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#007BFF',  // Active icon color
              tabBarInactiveTintColor: 'gray',   // Inactive icon color
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shortlisted" component={ShortlistedScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
