/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity
} from "react-native";
import * as COLOR from '../Constant'
import InputImage from '../components/InputImage'
import HomeGallery from '../components/HomeGallery'
import MainMenu from '../components/MainMenu'
import Inspirasi from '../components/Inspirasi'
import PencarianFav from '../components/PencarianFav'
import MainBerita from '../components/MainBerita'
import * as DUMMY from '../Dummy'

const VendorItem = (props) => {
  return (
  <TouchableOpacity style={[styles.background, {flex:1}]}onPress={() => {props.onPress()}}>
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

export class VendorList extends React.Component {

  state = {
    username: 'Masuk atau Daftar',
    loggedIn: false
  }

  componentDidMount(){
    // this.setState({username: this.props.user.username})
  }

  handleOnLogin = () => {
    this.setState({
      username: this.props.user.username,
      loggedIn: true
    })
  }

  render() {
    return (
      <View
        style={styles.container}>
        <StatusBar backgroundColor="#ef5656" barStyle="light-content" />
        <View style={styles.header}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItem: 'center'}}>
              <Image resizeMode='contain' source={require('../assets/images/back.png')} style={{alignSelf: 'center', marginLeft: 10, height: 20, width: 20}}/>
              <Text style={{marginLeft: 20, color: 'white', fontSize: 24}}>Venue</Text>
            </View>
            <Image resizeMode='contain' source={require('../assets/images/filter.png')} style={{alignSelf: 'center', marginRight: 5, height: 20, width: 20}}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex: 3}}>
              <InputImage
                hint='Cari Venue'
                image={require('../assets/images/search.png')}
              />
            </View>
            <View style={{flex: 2}}>
              <InputImage 
                hint='D.I Yogyakarta'
                image={require('../assets/images/pin.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <FlatList
            data={DUMMY.dummyGallery}
            renderItem={({ item: item,index }) => {
            return (
              <VendorItem
                onPress={() => {this.props.navigation.navigate('VendorDetail')}}
              />
            )}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  header: {
    backgroundColor: COLOR.COLOR_PRIMARY,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'column'
    
  },
  monicaText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'scriptina_regular',
    textTransform: 'capitalize'
  },
  menuContainer: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  menuTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  menuTitle: {
    marginLeft: 10,
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  },
  menuSelengkapnya: {
    marginRight: 10,
    color: COLOR.COLOR_PRIMARY,
    fontSize: 14,
    alignSelf: 'center'
  },
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
});
