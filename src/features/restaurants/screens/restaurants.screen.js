import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../components/restaurants-info-card.components";

const RestaurantSafeArea = styled(SafeAreaView)`
  backgroundcolor: white;
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarView = styled(View)`
  padding: 16px;
`;

const RestaurantListView = styled(View)`
  padding: 16px;
  flex: 1;
  background-color: blue;
`;

const RestaurantScreen = () => {
  return (
    <RestaurantSafeArea>
      <SearchBarView>
        <Searchbar placeholder="search" />
      </SearchBarView>
      <RestaurantListView>
        <RestaurantInfo />
      </RestaurantListView>
    </RestaurantSafeArea>
  );
};

export default RestaurantScreen;
