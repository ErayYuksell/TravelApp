import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{marginTop: 40}}>
      <Text>Home</Text>
      <Button  title="Click me" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
