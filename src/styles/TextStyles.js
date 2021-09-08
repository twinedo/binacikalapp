import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextLight = props => {
  return <Text {...props} style={[styles.textRegular, props.style]} />;
};

const TextRegular = props => {
  return <Text {...props} style={[styles.textRegular, props.style]} />;
};

const TextMedium = props => {
  return <Text {...props} style={[styles.textSemiBold, props.style]} />;
};

const TextBold = props => {
  return <Text {...props} style={[styles.textBold, props.style]} />;
};

export {TextLight, TextRegular, TextMedium, TextBold};

const styles = StyleSheet.create({
  textLight: {
    fontFamily: 'Rubik-Light',
  },
  textRegular: {
    fontFamily: 'Rubik-Regular',
  },
  textMedium: {
    fontFamily: 'Rubik-Medium',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
});
