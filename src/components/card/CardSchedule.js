import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GREY2, WHITE} from '../../styles/Colors';
import {randColorLight} from '../../services/utils/constants';
import {TextBold} from '../../styles/TextStyles';

const CardSchedule = ({onPress, title, time}) => {
  return (
    <LinearGradient
      //   key={item.id}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[WHITE, '#' + randColorLight()]}
      style={styles.cardRepo}>
      <View style={{flex: 1, margin: 15}}>
        <Text style={styles.txtTitleCardRepo}>{title}</Text>
        <Text
          style={styles.txtDescCardRepo}
          numberOfLines={2}
          ellipsizeMode="tail">
          {time}
        </Text>
      </View>
      <Pressable onPress={onPress} style={styles.btnTake}>
        <TextBold style={{color: WHITE}}>Ambil</TextBold>
      </Pressable>
    </LinearGradient>
  );
};

export default CardSchedule;

const styles = StyleSheet.create({
  cardRepo: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderRadius: 5,
    elevation: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  txtTitleCardRepo: {fontWeight: 'bold', fontSize: 18},
  txtDescCardRepo: {color: GREY2, marginVertical: 4},
  footerCardRepo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnTake: {
    backgroundColor: 'purple',
    height: 35,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
});
