import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {GREY} from '../../styles/Colors';

const TextInput1 = props => {
  return <TextInput {...props} style={[styles.textField, props.style]} />;
};

export default TextInput1;

const styles = StyleSheet.create({
  textField: {
    backgroundColor: GREY,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
  },
});
