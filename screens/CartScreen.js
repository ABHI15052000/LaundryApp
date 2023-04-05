import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <ScrollView>
      {total === 0 ? (
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Text>Your Cart is Empty</Text>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Text>{total}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
