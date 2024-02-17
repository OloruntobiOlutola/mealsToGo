import React from "react";
import { StyleSheet, View, Text } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

const RestaurantCardCover = styled(Card.Cover)`
  backgroundcolor: white;
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: white;
`;

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
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantInfo;
