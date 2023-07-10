import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 90,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
    });
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>First Name</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone N°</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
        }}
      >
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          <Text style={{ fontSize: 20 }}>
            $ {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View>
          <Text>
            You saved {route.params.oldPrice - route.params.newPrice} $
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
