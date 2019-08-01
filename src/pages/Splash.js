import React from "react";
import { 
  View, 
  Image, 
  Button,
  StyleSheet,
  Text
} from "react-native";
import{ StackActions, NavigationActions} from 'react-navigation'

export class Splash extends React.Component {

  async componentDidMount() {
    const prom = new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('Promise is created and consumed');
      }, 2000);
    });
    
    prom.then(() => {
      const navigateAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
        
      })
      this.props.navigation.dispatch(navigateAction)
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Image style={{ flex: 1, width: "100%", height: "100%"}}
        source={require('../assets/images/ex_bg.jpg')}/>
        <View style={styles.semiTransparent}>
          <Text style={styles.monicaText}>Monica</Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  semiTransparent:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: '#00000075',
      justifyContent: 'center',
      alignItems: 'center',
  },
  monicaText: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'scriptina_regular',
    textTransform: 'capitalize'
  },
})