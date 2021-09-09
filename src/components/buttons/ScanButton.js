import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {GREEN, BLUE} from '../../styles/Colors';

const ScanButton = ({onPress, children, style}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
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
    backgroundColor: BLUE,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
