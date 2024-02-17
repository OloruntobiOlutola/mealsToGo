import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Your best restaurant",
    icon,
    photos = [
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Card.Title title={name} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
export default RestaurantInfo;
