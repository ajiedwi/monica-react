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
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import * as COLOR from '../Constant'
import InputImage from '../components/InputImage'
import SavedStory from '../components/ProfileSavedStory';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'; // Version can be specified in package.json
import VendorAbout from './VendorAbout';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 220;
const COLLAPSED_HEIGHT = 52;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;


export class VendorDetail extends React.Component {

  constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Project' },
        { key: '2', title: 'About' },
        // { key: '3', title: 'Fav Picture' },
        // { key: '4', title: 'Info' },
      ],
      scroll: new Animated.Value(0),
    };
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
  });

    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <View
          style={styles.cover}>
          <View style={{position: 'absolute', flex: 1, height: '100%', width: '100%', zIndex: -1}}>
            <Image style={{ flex: 1, width: "100%", height: "100%"}}
              source={require('../assets/images/ex_gallery.jpg')}/>
          </View>
          <View style={[styles.overlay, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Image 
              source={require('../assets/images/back.png')}
              style={{width: 20, height: 20}}
              resizeMode={'contain'}
            />
            <Image 
              source={require('../assets/images/like.png')}
              style={{width: 20, height: 20}}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.accountInfo}>
            <View style={{flexDirection:'row'}}>
              <Image 
                source={require('../assets/images/ex_flower.jpg')}
                style={{width: 60, height: 60, borderRadius: 30}}
                resizeMode='cover'
              />
              <View style={{marginLeft: 20, justifyContent:'space-between'}}>
                <Text style={[{color: 'white', fontWeight: 'bold', fontSize: 18}]}>Zahid Sugih Panuwun</Text>
                <Text style={[{color: 'white'}]}>Imogiri, Bantul, D.I. Yogyakarta</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Image source={require('../assets/images/star.png')} style={styles.descriptionLogo} resizeMode='contain'/>      
                  <Text style={[styles.descriptionSmallText, {color: 'white'}]}>4.8</Text>      
                  <Image source={require('../assets/images/wallet.png')} style={[styles.descriptionLogo,{marginLeft: 10}]} resizeMode='contain'/>      
                  <Text style={[styles.descriptionSmallText, {color: 'white'}]}>20jt - 80jt</Text>      
                </View>
              </View>
            </View>
          </View>
          <TabBar {...props}
            style={{backgroundColor: "white", height: COLLAPSED_HEIGHT, elevation: 0, color: COLOR.COLOR_PRIMARY}}
            indicatorStyle={{backgroundColor: COLOR.COLOR_PRIMARY, height: 2}}
            activeColor={COLOR.COLOR_PRIMARY}
            inactiveColor={"#bbbbbb"}
            renderLabel={({ route, focused, color }) => (
              <Text style={{color: color, fontWeight: 'bold'}}>{route.title}</Text>
            )}
            
          />
        </View>
      </Animated.View>
    );
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
         return <SavedStory
                  scrollEventThrottle={1}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
                    { useNativeDriver: true }
                  )}
                  contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
                />;
      case '2':
        return <VendorAbout
                  scrollEventThrottle={1}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
                    { useNativeDriver: true }
                  )}
                  contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
                />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#ef5656" barStyle="light-content" />
        <TabView
          style={styles.container}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee"
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
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: '#00000090',
    height: COLLAPSED_HEIGHT*1,
    padding: 20
  },
  cover: {
    height: HEADER_HEIGHT,
    backgroundColor: 'white'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: COLOR.COLOR_PRIMARY,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  tabbar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    color: 'black'
  },
  accountInfo: {
    backgroundColor: '#00000090',
    height: HEADER_HEIGHT - (COLLAPSED_HEIGHT * 2),
    padding: 20,
    justifyContent:'center'
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
  accountText: {
    height: 20
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