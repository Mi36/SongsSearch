import { createAppContainer } from "react-navigation";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "../scenes/SearchScreen";
import Welcome from "../scenes/Welcome";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const bottomNavigator = createBottomTabNavigator({
  Library: {
    screen: Welcome,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Entypo name="folder-music" size={24} color="black" />;
      },
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="search1" size={24} color="black" />;
      },
    },
  },
});

export default createAppContainer(bottomNavigator);
