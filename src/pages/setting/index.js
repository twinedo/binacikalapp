import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GREEN, PRIMARY, SECONDARY, WHITE} from '../../styles/Colors';
import {TextBold} from '../../styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import Buttons1 from '../../components/buttons/Buttons1';
import Buttons2 from '../../components/buttons/Buttons2';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable style={styles.toolbar} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} style={{marginRight: 10}} />
          <TextBold style={{fontSize: 20}}>Setting</TextBold>
        </Pressable>
        <View style={{flex: 1}}>
          <Buttons2
            icon={<MaterialCommunityIcons name="account" size={24} />}
            text="Accounts"
            onPress={() => {}}
          />
          <Buttons2
            icon={
              <MaterialCommunityIcons name="card-account-details" size={24} />
            }
            text="e-NIC"
            onPress={() => {}}
          />
        </View>
        <Buttons1
          text="Logout"
          style={{backgroundColor: SECONDARY}}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    padding: 20,
  },
  toolbar: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  cardMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 1,
  },
  btnLogout: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: SECONDARY,
    borderRadius: 5,
  },
});
