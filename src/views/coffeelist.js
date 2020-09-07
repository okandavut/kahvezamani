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
        <Card>
          <Card.Title title={data.title} />
          <Card.Content />
          <Card.Cover
            source={{
              uri: data.image,
            }}
          />
          <Card.Actions>
            <Button
              icon={
                <Icon
                  name="coffee"
                  size={14}
                  style={{ marginRight: 5, marginTop: 2 }}
                  color="white"
                />
              }
              onPress={() => {
                navigation.navigate("Detail", {
                  coffeeTitle: data.title,
                });
              }}
              title="Kahve Bilgisi ve Yapılışı"
            />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
