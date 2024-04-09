import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React, { useRef, useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { data } from "./data";
import { COLORS, SIZES, width } from "../../../../assets/constants/theme";
const Walkthrough = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={styles.walkthrough_container}>
      <View style={styles.walkthrough_wrapper}>
        <Animated.FlatList
          horizontal
          keyExtractor={(item, index) => index.toString()}
          data={data}
          pagingEnabled
          resizeMode={SIZES.width}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.walkthrough_content_wrapper}>
                <View style={styles.walkthrough_image_wrapper}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.watlkthrought_image}
                  />
                </View>
              </View>
            );
          }}
        />
        <View style={styles.dots_container}>
          {data.map((item, index) => (
            <Text
              style={{
                height: responsiveHeight(0.8),
                width: responsiveWidth(4),
                borderRadius: responsiveWidth(10),
                marginLeft: 5,
                borderWidth: 1,
                backgroundColor:
                  currentIndex == index ? COLORS.primary : COLORS.light,
                borderColor:
                  currentIndex == index ? COLORS.primary : COLORS.dark,
              }}
              key={item.id}
            ></Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  walkthrough_container: {
    width: width,
    alignItems: "center",
    backgroundColor: COLORS.light,
    marginTop: SIZES.margin / 2,
  },
  walkthrough_wrapper: {
    width: width,
  },

  walkthrough_content_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  walkthrough_image_wrapper: {
    width: width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  watlkthrought_image: {
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    resizeMode: "cover",
    borderRadius: SIZES.radius,
  },

  dots_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.margin / 4,
  },

  walkthrought_dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
});
