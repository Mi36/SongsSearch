import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./App/reducers";

import AppNavigator from "./App/navigators/AppNavigator";

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <AppNavigator />
    </Provider>
  );
}
