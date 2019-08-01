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
  ScrollView,
  FlatList,
  StatusBar
} from "react-native";
import * as COLOR from '../Constant'
import InputImage from '../components/InputImage'
import HomeGallery from '../components/HomeGallery'
import MainMenu from '../components/MainMenu'
import Inspirasi from '../components/Inspirasi'
import PencarianFav from '../components/PencarianFav'
import MainBerita from '../components/MainBerita'
import * as DUMMY from '../Dummy'

export class HomeScreen extends React.Component {

  state = {
    username: 'Masuk atau Daftar',
    loggedIn: false
  }

  componentDidMount(){
    // this.setState({username: this.props.user.username})
  }

  venueDetail = () => {
    console.log('venue')
    this.props.navigation.navigate('VendorList')
  }

  login = () => {
    if(!this.state.loggedIn){
      this.props.navigation.navigate('Login', {
        onSuccess: this.handleOnLogin
      })
    } else {
      this.props.navigation.navigate('NewProfile')
    }
  }

  handleOnLogin = () => {
    this.setState({
      username: this.props.user.username,
      loggedIn: true
    })
  }

  render() {
    return (
      <ScrollView
        style={styles.container}>
        <StatusBar backgroundColor="#ef5656" barStyle="light-content" />
        <View style={styles.header}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center'}}>
            <Text style={styles.monicaText}>Monica</Text>
            <View style={{flexDirection: 'row', alignItem: 'center'}}>
                <Text style={{alignSelf: 'center',color: 'white', fontSize: 16, fontWeight: 'bold', height: '100%', textAlignVertical: 'center'}}
                  onPress={this.login}
                >{this.state.username}</Text>
                <Image source={require('../assets/images/bell.png')} style={{alignSelf: 'center', marginLeft: 10}}/>
            </View>
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
            horizontal
            data={DUMMY.dummyGallery}
            renderItem={({ item: item,index }) => {
            return (
              <HomeGallery
                title={item.title}
                subtitle={item.subtitle}
                position={index}
                lastPosition={DUMMY.dummyGallery.length}
              />
            )}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle}>Kategori Vendor</Text>
              <Text style={styles.menuSelengkapnya}>Selengkapnya</Text>
            </View>
            <FlatList
              data={DUMMY.dummyMenu}
              horizontal={false}
              numColumns={4}
              style={{alignSelf: 'center'}}
              renderItem={({ item: item,index }) => {
              return (
                <MainMenu
                  onItemClick={() => {this.venueDetail()}}
                />
              )}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <View style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle}>Inspirasi</Text>
              <Text style={styles.menuSelengkapnya}>Selengkapnya</Text>
            </View>
            <FlatList
              horizontal
              data={DUMMY.dummyGallery}
              renderItem={({ item: item,index }) => {
              return (
                <Inspirasi
                  title={item.title}
                  subtitle={item.subtitle}
                  position={index}
                  lastPosition={DUMMY.dummyGallery.length}
                />
              )}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <View style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle}>Pencarian Favorite</Text>
              <Text style={styles.menuSelengkapnya}>Selengkapnya</Text>
            </View>
            <FlatList
              horizontal
              data={DUMMY.dummyGallery}
              renderItem={({ item: item,index }) => {
              return (
                <PencarianFav
                  title={item.title}
                  subtitle={item.subtitle}
                  position={index}
                  lastPosition={DUMMY.dummyGallery.length}
                />
              )}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <View style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text style={styles.menuTitle}>Berita</Text>
              <Text style={styles.menuSelengkapnya}>Selengkapnya</Text>
            </View>
            <FlatList
              horizontal
              data={DUMMY.dummyBerita}
              renderItem={({ item: item,index }) => {
              return (
                <MainBerita
                  title={item.title}
                  date={item.date}
                  position={index}
                  lastPosition={DUMMY.dummyGallery.length}
                />
              )}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </ScrollView>
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
  }
});
