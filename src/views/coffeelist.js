/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { Button } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

import { Avatar, Card, Title, Paragraph } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";

import data from "../../mockdata/data.json";
import CoffeeDetailScreen from "./coffeedetail";

const CONTENT = data.CONTENT;

const HomeStack = createStackNavigator();

function CoffeeListScreen({ navigation }) {
  const lapsList = CONTENT.map((data) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity 
            onPress={() => {
              navigation.navigate("Detail", {
                coffeeTitle: data.title,
              });
            }}>
        <Card>

        {data.title &&
          <Text style={styles.coffeeNameTitle}>
          {data.title}
          </Text>
        }
          <Card.Cover
            source={{
              uri: data.image,
            }}
          />
           <Icon
              name="arrow-right"
              size={25}
              style={styles.goDetailArrow}
              color="white"
            />
        </Card>
        </TouchableOpacity>
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
    <HomeStack.Navigator screenOptions={{
      cardStyleInterpolator: forLeftSlide
      }}>
      <HomeStack.Screen
        name="Home"
        component={CoffeeListScreen}
        options={{ title: "Kahveler" }}
      />
      <HomeStack.Screen name="Detail" component={CoffeeDetailScreen} />
    </HomeStack.Navigator>
  );
}
export default CoffeeListStack;


const forLeftSlide = ({index, current, next, layouts: {screen}}) => {
  const translateX = current.progress.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [screen.width, 0, 0],
  });

  const opacity = next?.progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 0, 0],
  });

  return {cardStyle: {opacity, transform: [{translateX}]}};
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    color:"white"
  },
  coffeeNameTitle: {
    position: "absolute", 
    zIndex: 999,
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    borderColor:"black",
    color:'#FFFFFF',
    fontFamily:'Times New Roman',
    padding:15,
    textShadowColor:'#585858',
    textShadowRadius:5
  },
  goDetailArrow: {
    position:"absolute",
    paddingLeft:"90%",
    paddingTop:"23%"
  }
});
