import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, height, width } from "../../../assets/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Login from "./Login";
import SignUp from "./SignUp";
import SmallButton from "../../components/SmallButtons";
const Auth = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = (index) => {
    setToggleState(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.warapper}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: responsiveHeight(3),
          }}
        >
          <TouchableOpacity
            onPress={() => toggleTabs(1)}
            style={toggleState === 1 ? styles.active : styles.inActive}
          >
            <Text
              style={
                toggleState === 1 ? styles.active_text : styles.inActive_text
              }
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleTabs(2)}
            style={toggleState === 2 ? styles.active : styles.inActive}
          >
            <Text
              style={
                toggleState === 2 ? styles.active_text : styles.inActive_text
              }
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        {toggleState === 1 ? <Login /> : <SignUp />}
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: responsiveHeight(40),
    alignItems: "center",
  },
  warapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: responsiveHeight(20),
    borderRadius: 20,
  },
  active: {
    backgroundColor: COLORS.tertiary,
    width: responsiveWidth(30),
    borderRadius: 2,
    padding: responsiveHeight(2),
    marginRight: responsiveWidth(2),
  },
  inActive: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(30),
    borderRadius: 2,
    padding: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    borderWidth: 1,
  },
  active_text: {
    color: COLORS.light,
    fontWeight: "800",
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
  inActive_text: {
    color: COLORS.dark,
    fontWeight: "800",
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
});
