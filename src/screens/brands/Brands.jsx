import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data, location } from "../../../assets/constants/constants";
import { COLORS, SIZES } from "../../../assets/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Brands = () => {
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor={COLORS.primary}  />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.sub_container}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>Food panda</Text>
                <Text style={styles.number}>03088637291</Text>
                <Text style={styles.avail}>Available</Text>
                <View style={styles.mini_container}>
                  <Image source={location} style={styles.image_location} />
                  <Text style={styles.location}>London united kingdom</Text>
                </View>
              </View>
              <Image source={item.img} style={styles.main_image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginBottom:responsiveHeight(5)
  },
  sub_container: {
    position: "relative",
    marginVertical: responsiveHeight(2),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
    padding: responsiveWidth(2),
    width: responsiveWidth(95),
    alignSelf: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  mini_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: COLORS.dark,
    fontWeight: "800",
    fontSize: responsiveFontSize(2.5),
  },
  number: {
    color: COLORS.error,
    fontWeight: "800",
    fontSize: responsiveFontSize(2.5),
    paddingVertical: responsiveHeight(0.5),
  },
  avail: {
    color: COLORS.dark,
    fontWeight: "800",
    fontSize: responsiveFontSize(2.5),
    paddingBottom: 1,
  },
  location: {
    color: COLORS.dark,
    fontWeight: "600",
    fontSize: responsiveFontSize(2),
  },
  image_location: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    paddingTop: 2,
  },
  main_image: {
    position: "absolute",
    right: 0,
    width: 150,
    height: 80,
    resizeMode: "center",
  },
});
