import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../assets/constants/theme";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const InputComponent = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    borderRadius:SIZES.radius,
    width: responsiveWidth(85),
    padding: responsiveWidth(3),
    borderWidth:1,
    borderColor: COLORS.grey,
    flexDirection:'row',
    marginVertical: responsiveHeight(1.5),
    alignItems:"center",
    justifyContent:"center",
    color:'black',
    fontWeight:"800"
  },
});
