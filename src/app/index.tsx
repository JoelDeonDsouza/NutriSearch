import React, { useState } from "react";
import { View, FlatList, TextInput, Keyboard } from "react-native";
import { styles } from "../components/GlobalStyles/styles";
// component //
import { SearchListContainer } from "../components";
// Icons //
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const dataSearch = [
  { name: "Egg Toast", cal: 150, food: "egg 🍳" },
  { name: "Chicken Breast", cal: 165, food: "lean protein 🍗" },
  { name: "Quinoa", cal: 120, food: "whole grain 🌾" },
  { name: "Avocado", cal: 160, food: "healthy fat 🥑" },
  { name: "Salmon", cal: 200, food: "omega-3 🐟" },
  { name: "Broccoli", cal: 55, food: "fiber 🥦" },
];

export default function App() {
  //  search input //
  const [search, setSearch] = useState("");
  // on search //
  const handleKeyPress = () => {
    console.log(search);
    setSearch("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TextInput
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
          style={styles.inputContainer}
          returnKeyType="search"
          onSubmitEditing={handleKeyPress}
        />
        <View style={styles.scanContaier}>
          <Icon name="barcode-scan" size={26} color={"#4AA96C"} />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataSearch}
        renderItem={({ item }) => <SearchListContainer item={item} />}
      />
    </View>
  );
}
