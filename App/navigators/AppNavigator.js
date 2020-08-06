import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "../scenes/SearchScreen";
import Welcome from "../scenes/Welcome";

const bottomNavigator = createBottomTabNavigator({
  Welcome: Welcome,
  Search: SearchScreen,
});

export default createAppContainer(bottomNavigator);
