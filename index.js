import React, { Component } from "react";
import {
  AppRegistry,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import ApiKeys from "./constants/ApiKeys";
import firebase from "@firebase/app";

import AnylineHome from "./src/AnylineHome";

import HomeNavigator from "./navigation/HomeNavigator";

export default class Anyline extends React.Component {
  constructor(props) {
    super(props);

    //initilize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  render() {
    return <HomeNavigator />;
  }
}
AppRegistry.registerComponent("tttttttttttt", () => Anyline);
