import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {GREEN, PRIMARY} from '../../styles/Colors';
import {TextBold} from '../../styles/TextStyles';

const Buttons1 = ({onPress, text}, props) => {
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[styles.container, props.style]}>
      <TextBold>{text}</TextBold>
    </Pressable>
  );
};

export default Buttons1;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: GREEN,
    width: '100%',
    height: 45,
  },
  text: {},
});
