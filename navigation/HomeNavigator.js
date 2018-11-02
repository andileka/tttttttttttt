import { createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Profil from "../screens/Profil";
import AnylineHome from "../src/AnylineHome";

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
  Profil: { screen: Profil },
  AnylineHome: { screen: AnylineHome }
});

export default HomeNavigator;
