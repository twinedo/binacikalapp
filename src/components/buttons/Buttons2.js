import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WHITE} from '../../styles/Colors';
import {TextBold} from '../../styles/TextStyles';

const Buttons2 = ({onPress, icon, text}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
      <TextBold style={styles.text}>{text}</TextBold>
      <MaterialCommunityIcons name="chevron-right" size={24} />
    </Pressable>
  );
};

export default Buttons2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 1,
  },
  text: {marginLeft: 10, flex: 1},
});
