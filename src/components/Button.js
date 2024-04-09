import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { activeOpacity } from "../../assets/constants/constants";
import { COLORS, Quicksand_FONTS, SIZES } from "../../assets/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Button = ({ label, onPress, containerStyle, labelStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={{
        backgroundColor: COLORS.secondary,
        width: responsiveWidth(50),

        paddingHorizontal: responsiveWidth(7),
        paddingVertical: responsiveHeight(2.3),
        marginTop: responsiveHeight(5),
        borderRadius: SIZES.radius,

        ...containerStyle,
      }}
    >
      <Text
        style={{
          color: COLORS.light,
          fontSize: responsiveFontSize(2.8),
          ...Quicksand_FONTS.h3,
          textAlign: "center",
          fontWeight: "700",

          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {},
});
