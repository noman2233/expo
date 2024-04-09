import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home/Home';
import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/constants/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 310,
          color: COLORS.grey20,
         
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: COLORS.light,
        },
        contentOptions: {
          style: {
            color: COLORS.error100,
            // ...Quicksand_FONTS.h1,
          },
        },

        headerTitleStyle: {
          // ...FONTS.h3,
          fontSize: 13,
        },
        drawerLabelStyle: {
          fontFamily: 'Quicksand-Medium',
          fontSize: 13.5,
          height: 10,
        },

        headerStatusBarHeight: 0.01,
        drawerInactiveTintColor: COLORS.dark60,
        drawerActiveTintColor: COLORS.error100,
        drawerActiveBackgroundColor: COLORS.error20,
        drawerContentContainerStyle: COLORS.error100,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerShown: false,

        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
