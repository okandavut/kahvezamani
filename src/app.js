/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createStackNavigator} from '@react-navigation/stack';

import CoffeeListScreen from './views/coffeelist';
import CoffeeHistoryScreen from './views/coffeehistory';


const AppStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name="Kahveler" component={CoffeeListScreen} options={{ headerShown:false}}   /> 
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
