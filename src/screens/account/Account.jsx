import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Settings/Header'
import Settings from '../Settings/Settings'

const Account = ({navigation}) => {
  return (
    <View>
      <Header/>
      <Settings  label="Dashboard" />
      <Settings  label="Privacy Policy" onPress={()=>navigation.navigate("privacyPolicy")}/>
      <Settings  label="Logout" />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})