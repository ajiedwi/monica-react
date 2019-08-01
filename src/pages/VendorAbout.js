import * as React from 'react';
import { View, Text, Animated, TouchableHighlight, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
var { height, width } = Dimensions.get('window');
import * as CONSTANT from '../Constant'


const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const isi = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const CONTACTS = [
  { name: 'Marissa Castillo', number: 7766398169 },
  { name: 'Denzel Curry', number: 9394378449 },
  { name: 'Miles Ferguson', number: 8966872888 },
  { name: 'Desiree Webster', number: 6818656371 },
  { name: 'Samantha Young', number: 6538288534 },
  { name: 'Irene Hunter', number: 2932176249 },
  { name: 'Annie Ryan', number: 4718456627 },
  { name: 'Sasha Oliver', number: 9743195919 },
  { name: 'Jarrod Avila', number: 8339212305 },
  { name: 'Griffin Weaver', number: 6059349721 },
  { name: 'Emilee Moss', number: 7382905180 },
  { name: 'Angelique Oliver', number: 9689298436 },
  { name: 'Emanuel Little', number: 6673376805 },
  { name: 'Wayne Day', number: 6918839582 },
  { name: 'Lauren Reese', number: 4652613201 },
  { name: 'Kailey Ward', number: 2232609512 },
  { name: 'Gabrielle Newman', number: 2837997127 },
  { name: 'Luke Strickland', number: 8404732322 },
  { name: 'Payton Garza', number: 7916140875 },
  { name: 'Anna Moss', number: 3504954657 },
  { name: 'Kailey Vazquez', number: 3002136330 },
  { name: 'Jennifer Coleman', number: 5469629753 },
  { name: 'Cindy Casey', number: 8446175026 },
  { name: 'Dillon Doyle', number: 5614510703 },
  { name: 'Savannah Garcia', number: 5634775094 },
  { name: 'Kailey Hudson', number: 3289239675 },
  { name: 'Ariel Green', number: 2103492196 },
  { name: 'Weston Perez', number: 2984221823 },
  { name: 'Kari Juarez', number: 9502125065 },
  { name: 'Sara Sanders', number: 7696668206 },
  { name: 'Griffin Le', number: 3396937040 },
  { name: 'Fernando Valdez', number: 9124257306 },
  { name: 'Taylor Marshall', number: 9656072372 },
  { name: 'Elias Dunn', number: 9738536473 },
  { name: 'Diane Barrett', number: 6886824829 },
  { name: 'Samuel Freeman', number: 5523948094 },
  { name: 'Irene Garza', number: 2077694008 },
  { name: 'Devante Alvarez', number: 9897002645 },
  { name: 'Sydney Floyd', number: 6462897254 },
  { name: 'Toni Dixon', number: 3775448213 },
  { name: 'Anastasia Spencer', number: 4548212752 },
  { name: 'Reid Cortez', number: 6668056507 },
  { name: 'Ramon Duncan', number: 8889157751 },
  { name: 'Kenny Moreno', number: 5748219540 },
  { name: 'Shelby Craig', number: 9473708675 },
  { name: 'Jordyn Brewer', number: 7552277991 },
  { name: 'Tanya Walker', number: 4308189657 },
  { name: 'Nolan Figueroa', number: 9173443776 },
  { name: 'Sophia Gibbs', number: 6435942770 },
  { name: 'Vincent Sandoval', number: 2606111495 },
];

const AboutDetail = (props) => {
  return(
    <View style={styles.AboutDetailContainer}>
      <View style={{flexDirection: 'row', width: '80%'}}>
        <Image style={{height: 20, width: 40, marginRight: 10}} resizeMode='contain' source={props.image}/>
        <Text style={styles.infoText}>{props.content}</Text>
      </View>
      <TouchableHighlight style={styles.detailButton} underlayColor={'#83a89d'} onPress={() => {console.log('heii')}}>
        <Text style={styles.detailButtonText}>{props.btnText}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default class VendorAbout extends React.Component{
  
  render() {
    return (
      <AnimatedScrollView style={styles.background} {...this.props}>
        <View style={styles.whiteBg}>
          <Text style={styles.title}>Kontak</Text>
          <AboutDetail image={require('../assets/images/phone-call.png')} content={'(0274) 451001'} btnText={'Call'}/>
          <AboutDetail image={require('../assets/images/envelope.png')} content={'info@jogjaexpocenter.com'} btnText={'Message'}/>
        </View>
        <View style={styles.whiteBg}>
          <Text style={styles.title}>Alamat</Text>
          <AboutDetail image={require('../assets/images/pin-black.png')} content={'Jalan Janti, Jl. Wonocatur, Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55198'} btnText={'Open Map'}/>
        </View>
        <View style={styles.whiteBg}>
          <Text style={styles.title}>Deskripsi</Text>
          <Text style={styles.deskripsi}>{isi}</Text>
        </View>
      </AnimatedScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00000010'
  },
  whiteBg: {
    backgroundColor: 'white',
    width: '100%',
    height: undefined,
    padding: 10,
    marginTop: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333'
  },
  AboutDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    width: '100%'
  },
  infoText: {
    fontSize: 16,
    width: '85%',
    textAlign: 'justify'
  },
  detailButton: {
    width: 75,
    borderRadius: 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CONSTANT.COLOR_ACCENT,
    padding: 5
  },
  detailButtonText: {
    color: CONSTANT.COLOR_ACCENT,
    fontSize: 14
  },
  deskripsi: {
    fontSize: 14,
    textAlign: 'justify'
  }
})