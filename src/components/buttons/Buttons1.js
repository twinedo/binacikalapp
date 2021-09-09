import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {GREEN, WHITE} from '../../styles/Colors';
import {TextBold} from '../../styles/TextStyles';

const Buttons1 = ({onPress, text, style}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <TextBold style={{color: WHITE}}>{text}</TextBold>
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
});
