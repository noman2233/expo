import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { COLORS, SIZES } from "../../../assets/constants/theme";

const Header = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.continaer} onPress={onPress}>
      <View>
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Usman Awan</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  continaer: {
    width: responsiveWidth(90),
    alignSelf: "center",
    backgroundColor: COLORS.light60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: COLORS.light,
  },
  name: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 20,
  },
});
