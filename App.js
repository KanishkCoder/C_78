import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/meteor';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}} >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='IssLocation' component={IssLocationScreen} />
        <Stack.Screen name='Meteor' component={MeteorScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
