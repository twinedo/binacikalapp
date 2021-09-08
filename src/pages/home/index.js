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
import {GREY, GREY2, PRIMARY, WHITE} from '../../styles/Colors';
import {img_profile} from '../../assets/images';
import {TextBold, TextMedium} from '../../styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScanButton from '../../components/buttons/ScanButton';
import CardSchedule from '../../components/card/CardSchedule';
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={PRIMARY}
        translucent
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerProfile}>
            <Image source={img_profile} style={styles.imgProfile} />
            <View style={styles.detailProfile}>
              <TextBold>Muhammad OKtariadi</TextBold>
              <TextMedium>95133321</TextMedium>
            </View>
            <Ionicons name="settings" size={24} color={GREY2} />
          </View>

          <ScanButton style={{marginTop: 10}}>
            <TextBold>Scan untuk Absen</TextBold>
            <Ionicons name="qr-code-outline" size={24} />
          </ScanButton>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <TextBold>Jadwal Hari Ini</TextBold>
            <CardSchedule title="Matematika" time="08:00-10:00" />
            <CardSchedule title="B. Inggris" time="08:00-10:00" />
            <CardSchedule title="Komputer" time="08:00-10:00" />
            <CardSchedule title="B. Indonesia" time="08:00-10:00" />
          </View>
        </ScrollView>
      </View>
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
});
