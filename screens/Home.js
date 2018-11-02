import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CustomButton from "../components/CustomButton";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>We have</Text>
        <CustomButton
          text="Profil"
          onPress={() => this.props.navigation.navigate("Profil")}
        />
        <CustomButton
          text=" AnylineHome"
          onPress={() => this.props.navigation.navigate("AnylineHome")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
