import React from "react";
import { StatusBar as ExpoBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { StackNavigator } from "./StackNavigator";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StackNavigator />
        <ExpoBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});
