/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CoffeeListScreen from './views/coffeelist';
import CoffeeHistoryScreen from './views/coffeehistory';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Kahveler') {
            iconName = focused
              ? 'coffee'
              : 'coffee-outline';
          } else if (route.name === 'Kahve Tarihi') {
            iconName = 'history';
          }

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Kahveler" component={CoffeeListScreen}    />
        <Tab.Screen name="Kahve Tarihi" component={CoffeeHistoryScreen}   />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
