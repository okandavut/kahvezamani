/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {Image} from 'react-native-elements';

import data from '../../mockdata/data.json';

const makingCoffee = data.CONTENT;

function CoffeeDetailScreen({route, navigation}) {
  const {coffeeTitle} = route.params;

  const lapsList = makingCoffee.filter((data) => {
    return data.title == coffeeTitle ? data : '';
  });

  console.log(lapsList[0].make);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{lapsList[0].title}</Text>
        <Image source={{uri:lapsList[0].image }} style={{width: 200, height: 200}} />
        <Text>{lapsList[0].content}</Text>
        <Text>{lapsList[0].make}</Text>
      </View>
    </ScrollView>
  );
}

export default CoffeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
    paddingTop: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
});
