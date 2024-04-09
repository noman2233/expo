import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, width } from "../../../assets/constants/theme";
import { forward } from "../../../assets/constants/constants";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Settings = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <Image source={forward} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Settings;

const styles = StyleSheet.create({
  text: {
    color: COLORS.dark,
    fontSize: 18,
    padding: 10,
    fontWeight: "500",
  },
  container: {
    backgroundColor: COLORS.light80,
    borderWidth: 1,
    borderColor: COLORS.grey20,
    paddingVertical: 15,
    width: responsiveWidth(90),
    alignSelf: "center",
    marginVertical: responsiveHeight(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});
