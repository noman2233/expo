import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionBar from 'react-native-action-bar';
const Action = ({title, text, leftIcon, name}) => {
  return (
    <ActionBar
      containerStyle={{height: 60, alignSelf: 'center', paddingRight: 40}}
      backgroundColor={'#fff'}
      badgeColor={'#000000'}
      title={'My Tutorials'}
      titleStyle={styles.pageTitle}
      onLeftPress={() => goBack()}
      leftIconContainerStyle={{marginTop: 22}}
      leftIconName={'back'}
      leftIconImageStyle={{height: 18, width: 18}}
    />
  );
};

export default Action;

const styles = StyleSheet.create({});
