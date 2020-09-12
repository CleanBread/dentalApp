import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PatientScreen } from './screens';


const Stack = createStackNavigator();

const myTheme = {
  colors: {
    primary: 'white',
    border: '#F3F3F3'
  }
}

function App() {
  return (
    <NavigationContainer theme={myTheme} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Пациенты', headerTintColor: '#2A86FF', headerTitleStyle: {
            fontWeight: 'bold',
          }, headerStyle: { shadowOpacity: 0.5, elevation: 0.5 }
        }} />
        <Stack.Screen name="Patient" component={PatientScreen} options={{
          title: 'Карта пациента', headerTintColor: '#2A86FF', headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;