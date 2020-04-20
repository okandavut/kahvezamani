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
import data from '../../mockdata/data.json';

function CoffeeDetailScreen({route, navigation}) {
  const {coffeeTitle} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{coffeeTitle}</Text>
        <Text>{coffeeTitle} isimli kahvenin yapılışı ve diğer bilgileri burada olacak.</Text>
      </ScrollView>
    </View>
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
