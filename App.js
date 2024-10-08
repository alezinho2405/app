import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // Certifique-se de que você tenha uma tela inicial
import Banheiro from './screens/Banheiro';
import Pia from './screens/Pia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Banheiro" component={Banheiro} />
        <Stack.Screen name="Pia" component={Pia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
