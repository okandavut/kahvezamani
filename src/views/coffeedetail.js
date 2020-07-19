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
import Hr from 'react-native-hr-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, Header} from 'react-native-elements';
import data from '../../mockdata/data.json';

const makingCoffee = data.CONTENT;

function CoffeeDetailScreen({route, navigation}) {
  const {coffeeTitle} = route.params;

  const lapsList = makingCoffee.filter((data) => {
    return data.title == coffeeTitle ? data : '';
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Image
            source={{uri: lapsList[0].image}}
            style={{width: 500, height: 400}}
          />
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
              }}>
              {lapsList[0].title}
            </Text>
            <Icon
              name="coffee"
              size={25}
              style={{marginLeft: 15, marginTop: 2}}
              color="black"
            />
          </View>
          <Hr
            lineColor="#000"
            width={1}
            text="Nedir?"
            textStyles={styles.customStylesHere}
          />
          <Text style={{marginVertical: 15}}>{lapsList[0].content}</Text>
          <Hr
            lineColor="#000"
            width={1}
            text="Yapılışı"
            textStyles={styles.customStylesHere}
          />
          <Text>{lapsList[0].make}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default CoffeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginTop: 10,
    alignSelf: 'stretch',
  },
  customStylesHere: {
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 20,
  },
});
