import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GREEN,
  GREY,
  GREY2,
  PRIMARY,
  SECONDARY,
  WHITE,
} from '../../styles/Colors';
import {img_profile} from '../../assets/images';
import {TextBold, TextMedium} from '../../styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScanButton from '../../components/buttons/ScanButton';
import CardSchedule from '../../components/card/CardSchedule';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={PRIMARY}
        translucent
        barStyle="light-content"
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerProfile}>
              <Image source={img_profile} style={styles.imgProfile} />
              <View style={styles.detailProfile}>
                <TextBold>Muhammad OKtariadi</TextBold>
                <TextMedium>95133321</TextMedium>
              </View>
              <Ionicons
                name="settings"
                size={24}
                color={GREY2}
                onPress={() => navigation.navigate('Setting')}
              />
            </View>

            <ScanButton style={{marginVertical: 10}}>
              <TextBold style={{color: WHITE}}>Klik untuk Checkin</TextBold>
              <Ionicons name="qr-code-outline" size={24} color={WHITE} />
            </ScanButton>
            <ScanButton style={{marginVertical: 10, backgroundColor: GREEN}}>
              <TextBold style={{color: WHITE}}>Klik untuk Checkout</TextBold>
              <Ionicons name="exit-outline" size={24} color={WHITE} />
            </ScanButton>
            <Pressable style={styles.wrapperBtnData}>
              <TextBold style={styles.txtNotComplete}>
                Anda belum melengkapi data
              </TextBold>
              <Pressable style={styles.btnLengkapi}>
                <TextBold>Lengkapi</TextBold>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.body}>
            <TextBold>Jadwal Hari Ini</TextBold>
            <CardSchedule title="Matematika" time="08:00-10:00" />
            <CardSchedule title="B. Inggris" time="08:00-10:00" />
            <CardSchedule title="Komputer" time="08:00-10:00" />
            <CardSchedule title="B. Indonesia" time="08:00-10:00" />
            <View style={styles.wrapperNoSchedule}>
              <Ionicons name="calendar-sharp" size={80} color={GREY2} />
              <TextBold style={{color: GREY2}}>Tidak ada Jadwal</TextBold>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  header: {
    flexDirection: 'column',
    padding: 20,
  },
  headerProfile: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imgProfile: {
    width: 75,
    height: 75,
  },
  detailProfile: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  body: {
    backgroundColor: WHITE,
    height: '100%',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  wrapperBtnData: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: SECONDARY,
  },
  btnLengkapi: {
    borderRadius: 5,
    backgroundColor: WHITE,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 2,
  },
  wrapperNoSchedule: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNotComplete: {color: WHITE, marginBottom: 10, fontSize: 16},
});
