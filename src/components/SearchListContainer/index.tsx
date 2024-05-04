import React from "react";
import { View, Text } from "react-native";
// styles //
import { styles } from "./styles";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";

const SearchListContainer = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.searchedText}>{item.name}</Text>
        <Icon name="add" size={36} color={"#F4F4F4"} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.caloriesText}>
          {item.cal}
          <Text style={styles.calText}>Cal</Text>
        </Text>
        <Text style={styles.searchedText}>{item.food}</Text>
      </View>
    </View>
  );
};

export default SearchListContainer;
