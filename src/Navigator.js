import {HomeScreen} from './pages/HomeScreen';
import {Login} from './pages/Login';
import {Splash} from './pages/Splash';
import {Profile} from './pages/Profile';
import {VendorDetail} from './pages/VendorDetail'
import {VendorList} from './pages/VendorList'
import {RegisterUser} from './pages/RegisterUser'
import {RegisterVendor2} from './pages/RegisterVendor2'
import { createStackNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { connect } from 'react-redux';
import * as COLOR from './Constant'

let LoginContainer = connect(state => ({ user: state.userState }))(Login);
let RegisterUserContainer = connect(state => ({ user: state.userState }))(RegisterUser);
let HomeContainer = connect(state => ({ user: state.userState }))(HomeScreen);

export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    Login: {
      screen: LoginContainer,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    RegisterUser: {
      screen: RegisterVendor2,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    Splash: {
      screen: Splash,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    VendorList: {
      screen: VendorList,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    NewProfile: {
      screen: Profile,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    VendorDetail: {
      screen: VendorDetail,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    },
    Profile: {
      screen: createMaterialTopTabNavigator({
        Screen1: { 
          screen: HomeScreen,
          navigationOptions: {
            title: 'Saved Story',
          },
        },
        Screen2: { 
          screen: HomeScreen,
          navigationOptions: {
            title: 'Saved Vendor',
          },
        },
        Screen3: { 
          screen: HomeScreen,
          navigationOptions: {
            title: 'Fav Picture',
          },
        },
        Screen4: { 
          screen: HomeScreen,
          navigationOptions: {
            title: 'Info',
          },
        },
      },
        {
          tabBarPosition: 'top',
          swipeEnabled: true,
          animationEnabled: true,
          tabBarOptions: { 
            upperCaseLabel: false,
            activeTintColor: COLOR.COLOR_PRIMARY,
            inactiveTintColor: '#333333',
            style: {
              backgroundColor: 'white',
            },
            labelStyle: {
              textAlign: 'center',
              fontSize: 14
            },
            indicatorStyle: {
              borderBottomColor: COLOR.COLOR_PRIMARY,
              borderBottomWidth: 3,
            },
          },
          headerMode: 'none',
          navigationOptions:  {
              headerVisible: false,
              header: null,
          }
        }
      )
    },

  },
  {
    initialRouteName: "Splash"
  },
);

// export default createAppContainer(AppNavigator);