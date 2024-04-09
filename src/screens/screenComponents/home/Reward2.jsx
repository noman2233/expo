import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../../assets/constants/theme";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Reward2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>12511</Text>
        <Text style={styles.text}>RS 12511</Text>
      </View>
    </View>
  );
};

export default Reward2;

const styles = StyleSheet.create({
  container: {
    marginTop:responsiveHeight(4),
    alignSelf: "center",
    borderWidth: 15,
    borderColor: "#2a0b89",
    backgroundColor: "#CFEFC8",
    width: 220,
    height: 220,
    borderRadius: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    borderWidth: 15,
    borderColor: "#0b891a",
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
    paddingTop:3
  },
});
