import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
//import Colors from "../constant/Colors";

const MusicItem = (props) => {
  return (
    <View style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.artistName}</Text>
        <Text>{props.collectionName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});

export default MusicItem;
