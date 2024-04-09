import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../screenComponents/home/TopBar";
import Reward from "../screenComponents/home/Reward";
import Reward2 from "../screenComponents/home/Reward2";
import Walkthrough from "../screenComponents/home/SelectProject";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { COLORS } from "../../../assets/constants/theme";

const Home = () => {
  return (
    <View style={{ marginBottom: responsiveHeight(5) }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <Reward />
        <Reward2 />
        <Walkthrough />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
