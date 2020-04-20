/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import {createStackNavigator} from '@react-navigation/stack';

import data from '../../mockdata/data.json';
import CoffeeDetailScreen from './coffeedetail';

const CONTENT = data.CONTENT;

const HomeStack = createStackNavigator();

function CoffeeListScreen({navigation}) {
  const lapsList = CONTENT.map((data) => {
    return (
      <View style={styles.card}>
        <Card>
          <Card.Title title={data.title} />
          <Card.Content />
          <Card.Cover
            source={{
              uri: data.image,
            }}
          />
          <Card.Actions>
            <View>
              <Button
                title="Go to Details"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Detail', {
                    coffeeTitle: data.title,
                  });
                }}
              />
            </View>
          </Card.Actions>
        </Card>
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.container}>{lapsList}</View>
    </ScrollView>
  );
}
function CoffeeListStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={CoffeeListScreen} />
      <HomeStack.Screen name="Detail" component={CoffeeDetailScreen} />
    </HomeStack.Navigator>
  );
}
export default CoffeeListStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    paddingTop: 30,
  },
});
