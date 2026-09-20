import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import CardsScreen from '../screens/CardsScreen';
import MoreScreen from '../screens/MoreScreen';
import SignInScreen from '../screens/SignInScreen';
import { colors } from '../theme/colors';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Payments" 
        component={PaymentsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="repeat" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Cards" 
        component={CardsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="credit-card" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="more-horizontal" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
