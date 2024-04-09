import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputComponent from "../../components/InputComponent";
import { COLORS } from "../../../assets/constants/theme";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Button from "../../components/Button";
import {
  facebook,
  google,
  lindkin,
  twitter,
} from "../../../assets/constants/constants";

const Login = () => {
  return (
    <View style={styles.container}>
      <InputComponent placeholder="Userename" />
      <InputComponent placeholder="Password" />
      <Button
        label="SignUp"
        containerStyle={{
          backgroundColor: COLORS.tertiary,
          marginTop: 0,
          marginBottom: 20,
          width: responsiveWidth(80),
        }}
      />
      <View style={styles.images}>
        <Image source={facebook} style={styles.image} />
        <Image source={google} style={styles.image} />
        <Image source={lindkin} style={styles.image} />
        <Image source={twitter} style={styles.image} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(90),
    // position:"absolute",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    paddingVertical:responsiveHeight(5),
    borderRadius:20
  },
  images: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: responsiveWidth(7),
    marginTop: responsiveHeight(3),
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});
