import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home/Home";
import Parent from "./normal/Parent";
import { COLORS } from "../../assets/constants/theme";
import Brands from "../screens/brands/Brands";
import Main from "./drawer/Main";
import Account from "../screens/account/Account";
import PrivacyPolicy from "../screens/privacyPolicy/PrivacyPolicy";
import Login from "../screens/authentication/Login";
import SignUp from "../screens/authentication/SignUp";
import Splash from "./normal/Splash";
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.light,
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="privacyPolicy"
          component={PrivacyPolicy}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: true }}
        />


        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
