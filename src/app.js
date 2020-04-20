/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CoffeeListScreen from './views/coffeelist';
import CoffeeHistoryScreen from './views/coffeehistory';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Kahveler" component={CoffeeListScreen} />
        <Tab.Screen name="Kahve Tarihi" component={CoffeeHistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
