import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  account,
  main_image,
  share,
} from "../../../../assets/constants/constants";
import { COLORS, SIZES, width } from "../../../../assets/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SmallButton from "../../../components/SmallButtons";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mini_container}>

      <View style={styles.wrapper}>
        <Image source={account} style={styles.image} />
        <Text style={styles.text}>Mint Reward</Text>
        <Image source={share} style={styles.image} />
      </View>
      <Text style={styles.text_2}>Dont Trash It</Text>
      <Text style={styles.text_2}>MINT it</Text>
      </View>

      <View style={styles.small_cont}>
        <Image source={main_image} style={styles.main_image} />
        <Text style={styles.text_name}>Noman sanaullah</Text>
        <SmallButton
          label="Redeme"
          containerStyle={{
            backgroundColor: COLORS.primary,
            marginRight: 10,
            borderRadius:SIZES.radius,
            width:150
          }}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    position:'relative',
    height:responsiveHeight(40)
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
 
    paddingHorizontal: 10,
    paddingTop:responsiveHeight(4)
  
  },
  text: {
    color: COLORS.light,
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
  },
  text_2: {
    color: COLORS.light,
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  small_cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.light,
    width: responsiveWidth(92),
    alignSelf: "center",
    borderRadius: SIZES.radius,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    height: responsiveHeight(15),
    position:'absolute',
    bottom:responsiveHeight(-10)
  },
  main_image: {
    width: 50,
    height: 30,
    resizeMode: "contain",
    marginLeft:10
  },
  text_name:{
    fontWeight:"800",
    fontSize:15
  },
  mini_container:{
    
    
     
  }
});
