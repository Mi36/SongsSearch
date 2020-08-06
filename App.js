import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import SearchScreen from "./src/components/SearchScreen";

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <View style={{ flex: 1, paddingTop: 25 }}>
        <SearchScreen />
      </View>
    </Provider>
  );
}
