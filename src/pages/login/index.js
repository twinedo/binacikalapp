import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SECONDARY, WHITE, GREY2} from '../../styles/Colors';
import {img_logo} from '../../assets/images';
import {TextLight} from '../../styles/TextStyles';
import TextInput1 from '../../components/textfield/TextInput1';
import Buttons1 from '../../components/buttons/Buttons1';
import {useNavigation} from '@react-navigation/core';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={WHITE} translucent barStyle="light-content" />
      <View style={styles.container}>
        <Image source={img_logo} style={styles.logo} />
        <View style={styles.inputWrapper}>
          <TextLight style={{color: GREY2}}>Nomor Induk Casis</TextLight>
          <TextInput1 />
        </View>
        <View style={[styles.inputWrapper, {marginBottom: 40}]}>
          <TextLight style={{color: GREY2}}>Password</TextLight>
          <TextInput1 secureTextEntry />
        </View>
        <Buttons1 text={'Login'} onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  txtLogin: {
    color: SECONDARY,
    fontSize: 30,
  },
});
