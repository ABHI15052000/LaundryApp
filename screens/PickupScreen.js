import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";

const PickupScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const deliveryTime = [
    {
      id: "1",
      name: "2-3 Days",
    },
    {
      id: "2",
      name: "3-4 Days",
    },
    {
      id: "3",
      name: "4-5 Days",
    },
    {
      id: "4",
      name: "5-6 Days",
    },
    {
      id: "5",
      name: "Tomorrow",
    },
  ];

  const times = [
    {
      id: "1",
      time: "11:00 PM",
    },
    {
      id: "2",
      time: "12:00 PM",
    },
    {
      id: "3",
      time: "1:00 PM",
    },
    {
      id: "4",
      time: "2:00 PM",
    },
    {
      id: "5",
      time: "3:00 PM",
    },
    {
      id: "6",
      time: "4:00 PM",
    },
  ];

  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          Enter Address
        </Text>
        <TextInput
          style={{
            borderColor: "gray",
            padding: 40,
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          PickUp Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-03-18")}
          endDate={new Date("2023-03-26")}
          initialSelectedDate={new Date("2023-03-18")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          DeliveryDate
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, index) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={item.id}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={{
            padding: 15,
            backgroundColor: "#088F8F",
            marginTop: 80,
            margin: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            Proceed to Cart
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({});
