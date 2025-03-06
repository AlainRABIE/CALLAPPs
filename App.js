import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './IntroScreen';
import Login from './screens/Login/Login';
import CalorieCounter from './screens/Home/CalorieCounter';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Introduction" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CalorieCounter" component={CalorieCounter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
