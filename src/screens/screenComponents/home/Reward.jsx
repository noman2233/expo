import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../../assets/constants/theme";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Reward = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Reward</Text>
        <Text style={styles.text}>2345</Text>
      </View>
      <View style={styles.wrapper_2}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>Collection</Text>
        <Text style={styles.text}>23 KG</Text>
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:20,
  },
  wrapper: {
    borderWidth: 15,
    borderColor: "#A1D2A7",
    backgroundColor: "#CFEFC8",
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: "800",
  },
  wrapper_2: {
    borderWidth: 15,
    borderColor: "#A1D2A7",
    backgroundColor: "#CFEFC8",
    width: 170,
    height: 170,

    alignItems: "center",
    justifyContent: "center",
  },
});
