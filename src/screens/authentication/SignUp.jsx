import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputComponent from "../../components/InputComponent";
import { COLORS, SIZES, width } from "../../../assets/constants/theme";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Button from "../../components/Button";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <InputComponent placeholder="Userename" />
      <InputComponent placeholder="Phone Number" />
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Password" />
      <InputComponent placeholder="Confirm Password" />
      <Button
        label="SignUp"
        containerStyle={{
          backgroundColor: COLORS.tertiary,
          marginTop: 0,
          marginBottom: 20,
          width: responsiveWidth(80),
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(90),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
