import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.line1}>Library</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 8.5,
            justifyContent: "center",
          }}
        >
          <Text style={styles.line2}>Looking for your music?</Text>
          <Text style={styles.line3}>
            Music you purchase from the iTunes Store will appear here.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
    marginLeft: 15,
  },
  line1: { fontSize: 40, fontWeight: "bold" },
  line3: {
    textAlign: "center",
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
  },
  line2: {
    fontSize: 23,
    fontWeight: "700",
  },
});
