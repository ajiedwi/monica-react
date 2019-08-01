import * as React from 'react';
import { TouchableOpacity,View, Text, Animated, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
var { height, width } = Dimensions.get('window');


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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

export const VendorItem = (props) => {
  return (
  <TouchableOpacity style={[styles.background, {flex:1}]}onPress={() => {console.log(props.log)}}>
    <Image style={{ flex: 4, width: "100%"}}
      source={require('../assets/images/ex_gallery.jpg')}/>
    <View style={styles.bgSemiWhite}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Image 
            source={require('../assets/images/ex_flower.jpg')}
            style={{width: 50, height: 50, borderRadius: 25, alignSelf: 'center'}}
            resizeMode='cover'
            />
        </View>
          <View style={[{flex: 9}, styles.descriptionContainer]}>
            <Text numberOfLines={2} style={styles.textJudul}>
              Grha Pradipta Jogja Expo Center
            </Text>
            <Text numberOfLines={1} style={{marginTop: 5}}>
              Bantul, D.I. Yogyakarta
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image source={require('../assets/images/star.png')} style={styles.descriptionLogo} resizeMode='contain'/>      
              <Text style={styles.descriptionSmallText}>4.8</Text>      
              <Image source={require('../assets/images/wallet.png')} style={[styles.descriptionLogo,{marginLeft: 10}]} resizeMode='contain'/>      
              <Text style={[styles.descriptionSmallText, {color: '#03B2B5'}]}>20jt - 80jt</Text>      
            </View>
          </View>
            <View style={{flex: 4, marginTop: 10}}>
              <View style={styles.recommended}>
                <Image source={require('../assets/images/recommended.png')} style={{alignSelf: 'center', height: 12.5, marginRight: 2.5}} resizeMode='contain'/>            
                <Text style={{fontSize: 10, color: '#558de8', alignSelf: 'center'}}>Recommended</Text>
              </View>
            </View>
            <View style={{flex: 2}}>
              <Image source={require('../assets/images/like.png')} style={{alignSelf: 'center', marginTop: 10}}/>            
            </View>
          </View>
      </View>
    </TouchableOpacity>
  )
}
export default class SavedVendor extends React.Component{
  _renderItem = ({ item }) => (
    <VendorItem/>
  );

  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <AnimatedFlatList
        data={CONTACTS}
        keyExtractor={(item, i) => String(i)}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._ItemSeparator}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: 280,
    elevation: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 5
  },
  bgSemiWhite: {
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flex: 2,
  },
  textJudul: {
    fontSize: 18,
    color: 'black'
  },
  textSubJudul: {
    fontSize: 12,
  },
  input: {
    flex: 4
  },
  separator: {
    height: 3,
    backgroundColor: '#dddddd'
  },
  descriptionContainer: {
    justifyContent: 'center',
    padding: 10
  },
  recommended: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
    borderColor: '#558de8',
    borderWidth: 1,
    padding: 5
  },
  descriptionSmallText: {
    fontSize: 11,
    marginLeft: 5,
    alignSelf: 'center'
  },
  descriptionLogo: {
    alignSelf: 'center',
    height: 12.5
  }
})