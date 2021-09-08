import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {GREEN, WHITE} from '../../styles/Colors';
import {TextBold} from '../../styles/TextStyles';

const ScanButton = ({onPress, children}, props) => {
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[styles.container, props.style]}>
      {children}
    </Pressable>
  );
};

export default ScanButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: GREEN,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
