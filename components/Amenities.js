import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Room Service",
    },
    {
      id: "1",
      name: "Free Wi-Fi",
    },
    {
      id: "2",
      name: "Family Rooms",
    },
    {
      id: "3",
      name: "Free Parking",
    },
    {
      id: "4",
      name: "Swimming Pool",
    },
    {
      id: "5",
      name: "Restaurant",
    },
    {
      id: "6",
      name: "Fitness Center",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "600" }}>
        Most Popular Facilities
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {services.map((item, index) => (
          <View
            key={index}
            style={{
              margin: 10,
              backgroundColor: "#007FFF",
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
