import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Bottom = createBottomTabNavigator();
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Home from '../../screens/home/Home';
import Brands from '../../screens/brands/Brands';
import { COLORS } from '../../../assets/constants/theme';
import { account, account_2, home, home_white, menu, menu_white, setting_white, settings } from '../../../assets/constants/constants';
import Account from '../../screens/account/Account';
const BottomNavigator = () => {
  const navigation = useNavigation();

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        activeTintColor: '#000000',
        inactiveTintColor: 'black',
        headerShown: false,
        activeBackgroundColor: 'green',
        inactiveBackgroundColor: 'green',
        tabBarShowLabel: true,
        labelStyle: {fontSize: 14},
        showIcon: true,
        tabBarStyle: {
          height: responsiveHeight(8),
          backgroundColor: COLORS.primary,
          borderTopColor: COLORS.grey08,
          borderTopWidth: 1,
        },
      })}
      activeColor="white"
      inactiveColor="white"
      barSyle={{backgroundColor: 'white'}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={focused ? home_white : home_white}
            style={focused ? styles.active : styles.inactive}
          />          ),
        }}
      />
      <Bottom.Screen
        name="Brands"
        component={Brands}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={focused ? menu_white : menu_white}
            style={focused ? styles.active : styles.inactive}
          />          ),
        }}
      
      />
      <Bottom.Screen
        name="Setting"
        component={Brands}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={focused ? setting_white : setting_white}
            style={focused ? styles.active : styles.inactive}
          />
          ),
        }}
      
      />
      <Bottom.Screen
        name="Account"
        component={Account}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={focused ? account : account}
            style={focused ? styles.active : styles.inactive}
          />          ),
        }}
      
      />
     
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.grey08,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  active:{
    width:30,
    height:30,
    resizeMode:"cover"
  },
  inactive:{
    width:20,
    height:20,
    resizeMode:"cover"
  }
});
