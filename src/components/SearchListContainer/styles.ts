import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    paddingHorizontal: 12,
    height: 155,
    backgroundColor: "#74E291",
    borderRadius: 16,
    marginBottom: 15,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height / 20,
  },
  searchedText: {
    color: "#F4F4F4",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  caloriesText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F4F4F4",
  },
  calText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F4F4F4",
  },
});
