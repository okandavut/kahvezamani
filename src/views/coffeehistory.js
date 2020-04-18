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

const historyOfCoffee = data.COFFEEHISTORY;
function CoffeeHistoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingTop: 30}}>
        <Text style={styles.title}>Kahve Tarihi</Text>
        <Text style={styles.title}>{historyOfCoffee}</Text>
      </ScrollView>
    </View>
  );
}

export default CoffeeHistoryScreen;

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
