import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  Text,
  Image
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'; // Version can be specified in package.json
import SavedStory from '../components/ProfileSavedStory';
import SavedVendor from '../components/ProfileSavedVendor';
import * as COLOR from '../Constant'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 270;
const COLLAPSED_HEIGHT = 52;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;

const SavedStoryTab = () => (
  <SavedStory
    scrollEventThrottle={1}
    onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { y: new Animated.Value(0), } } }],
      { useNativeDriver: true }
    )}
    contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
  />
);

const SavedVendorTab = () => (
  <SavedVendor
    scrollEventThrottle={1}
    onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { y: new Animated.Value(0), } } }],
      { useNativeDriver: true }
    )}
    contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
  />
);



export class Profile extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Saved Story' },
        { key: '2', title: 'Saved Vendor' },
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
          <View style={styles.overlay}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', height: '100%'}}>
              <Text style={styles.profileText}>Profile</Text>
              <Image source={require('../assets/images/settings.png')} style={{alignSelf: 'center', marginLeft: 10}}/>
            </View>
          </View>
          <View style={styles.accountInfo}>
            <View style={{flexDirection:'row'}}>
              <Image 
                source={require('../assets/images/ex_flower.jpg')}
                style={{width: 60, height: 60, borderRadius: 30}}
                resizeMode='cover'
              />
              <View style={{marginLeft: 20, justifyContent:'space-between'}}>
                <Text style={[{color: 'black', fontWeight: 'bold', fontSize: 18}]}>Zahid Sugih Panuwun</Text>
                <Text style={[{color: 'black'}]}>Imogiri, Bantul, D.I. Yogyakarta</Text>
                <Text>emailzahid@gmail.com</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor: '#eeeeee50', padding: 10, marginTop: 15}}>
              <Image source={require('../assets/images/bitcoin.png')} style={{alignSelf: 'center', marginLeft: 5}}/>            
              <View style={{flexDirection:'row', marginLeft: 20, justifyContent:'space-between', flex:1}}>
                <Text style={[{color: '#03B2B5', fontWeight: 'bold', fontSize: 16, alignSelf:'center'}]}>Monica Points</Text>
                <Text style={[{color: '#03B2B5', fontWeight: 'bold', fontSize: 16, alignSelf:'center'}]}>1.000.000</Text>
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
        return <SavedVendor
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
  },
  overlay: {
    backgroundColor: COLOR.COLOR_PRIMARY,
    height: COLLAPSED_HEIGHT*1.25,
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
  },
  tabbar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    color: 'black'
  },
  accountInfo: {
    backgroundColor: 'white',
    height: HEADER_HEIGHT - (COLLAPSED_HEIGHT * 2.25),
    padding: 20,
    justifyContent:'center'
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  accountText: {
    height: 20
  }
});
