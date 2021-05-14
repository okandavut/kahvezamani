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
        
          <Image
            source={{uri: lapsList[0].detailImage}}
            style={{width: 500, height: 400}}
          />
          <View style={styles.bodyContainer}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingTop:10,
                fontWeight:"bold"
              }}>
              {lapsList[0].title}
            </Text>
            <Text  textBreakStrategy='highQuality' style={{marginVertical: 15}}>{lapsList[0].content}</Text>
            <Text style={{marginVertical: 15, fontWeight:'bold'}}>Yapılışı</Text>
            <Text textBreakStrategy='highQuality'>{lapsList[0].make}</Text>
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
