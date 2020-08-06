import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

//import { SearchBar } from "react-native-elements";
import { fieldChange, fetchApi } from "../actions/ApiActions";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { attribute: "value" };
  }

  getData = () => {
    this.props.fetchApi();
  };

  renderItem = ({ item }) => {
    return <Text>{item.trackName}</Text>;
  };

  render() {
    const { field, songs } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 38 }}>
        <TextInput
          style={{
            borderColor: "red",
            borderTopColor: "red",
            marginHorizontal: 15,
          }}
          placeholder="Type Here..."
          onChangeText={(text) => {
            this.props.fieldChange(text);
          }}
          value={field}
        />

        <Button
          title="SEARCH"
          onPress={(field) => {
            this.props.fetchApi(field);
          }}
        />
        <FlatList
          data={this.props.songs}
          renderItem={this.renderItem}
          keyExtractor={(songs, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { field, songs } = state.api;
  return { field, songs };
};

export default connect(mapStateToProps, { fieldChange, fetchApi })(
  SearchScreen
);
