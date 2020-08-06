import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

import { SearchBar } from "react-native-elements";
import { fieldChange, fetchApi, loadingData } from "../actions/ApiActions";
import MusicItem from "../components/MusicItem";

class SearchScreen extends Component {
  renderItem = ({ item }) => {
    return (
      <MusicItem
        image={item.artworkUrl100}
        title={item.trackName}
        artistName={item.artistName}
        collectionName={item.collectionName}
      />
    );
  };

  render() {
    const { field } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 38, marginLeft: 15 }}>
        <Text style={styles.header}>Search</Text>
        <SearchBar
          inputStyle={{ color: "black" }}
          autoCapitalize="none"
          lightTheme
          round
          placeholder="Artists, Songs, Lyrics and more"
          onChangeText={(text) => {
            this.props.fieldChange(text);
          }}
          value={field}
          onSubmitEditing={() => {
            this.props.fetchApi({ field });
            this.props.loadingData();
          }}
          returnKeyType="search"
        />
        {this.props.loading === true && (
          <View style={{ marginTop: 70 }}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        {this.props.error === "NoSongFount" && (
          <Text style={styles.line3}>No Songs Found.</Text>
        )}
        {this.props.error === "NetworkIssue" && (
          <Text style={styles.line3}>
            Network Connection issue, please try again.
          </Text>
        )}

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
  const { field, songs, loading, error } = state.api;
  return { field, songs, loading, error };
};

const styles = StyleSheet.create({
  line3: {
    textAlign: "center",
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
    marginTop: 29,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listItem: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default connect(mapStateToProps, { fieldChange, fetchApi, loadingData })(
  SearchScreen
);
