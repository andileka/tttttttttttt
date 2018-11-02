import React from "react";
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import CustomButton from "../components/CustomButton";

export default function Overview({
  openAnyline,
  checkCameraPermissionAndOpen,
  disabled
}) {
  const platformPermissionCheck =
    Platform.OS === "android" ? checkCameraPermissionAndOpen : openAnyline;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton
          text="BOTTLECAP Scanner"
          onPress={() => {
            platformPermissionCheck("BOTTLECAP");
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: "#303030",
    marginTop: "40%",
    marginBottom: "20%"
  },
  buttons: {
    margin: 5
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 25
  }
});
