import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { main_image } from "../../../assets/constants/constants";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  COLORS,
  FONTS,
  Quicksand_FONTS,
  SIZES,
  height,
  width,
} from "../../../assets/constants/theme";
import Button from "../../components/Button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={main_image} style={styles.image} />
      <Text style={styles.text_1}>Discover Your Dream Reward Here</Text>
      <Text style={styles.text_2}>Dot trash it , Minit it</Text>
      <Button label="Lets Go" />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(28),
  },
  container: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  text_1: {
    color: COLORS.primary,

    fontWeight: "800",
    fontSize: SIZES.h2,
    paddingVertical: responsiveHeight(1),
  },
  text_2: {
    color: COLORS.secondary,

    fontWeight: "500",
    fontSize: SIZES.h2,
  },
});
