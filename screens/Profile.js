import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
    const [user, setUser] = useState()
  const logout = () => {
    AsyncStorage.removeItem("userData");
    setUser(null);
    console.log(user);
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginTop: 50,
          marginBottom: 20,
        }}
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
      <Pressable style={{ width: 150 }} onPress={logout}>
        <Text
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 6,
            borderWidth: 0.8,
            marginVertical: 10,
            textAlign: "center",
            padding: 5,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Log Out
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
