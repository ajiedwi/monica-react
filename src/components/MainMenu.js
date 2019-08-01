import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
var { height, width } = Dimensions.get('window');
var size = (width - 40) /4


export default class HomeGallery extends React.Component {

  state = {
    marginLeft: 5,
    marginRight: 5
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <TouchableOpacity style={[styles.background]}
        onPress={() => {this.props.onItemClick()}}
      >
        <View style={styles.bgSemiWhite}>
          <Image 
            source={require('../assets/images/cake.png')}
            style={styles.Image}
            resizeMode='cover'
            />
        </View>
        <Text style={{alignSelf: 'center'}}>Kue Pernikahan</Text>
      </TouchableOpacity>
    )
  }


}

const styles = StyleSheet.create({
    background: {
      borderRadius: 5,
      elevation: 0,
      width: size,
      height: size,
      backgroundColor: '#00000000',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    bgSemiWhite: {
      backgroundColor: '#00000010',
      margin: 5,
      width: size-25,
      alignSelf: 'center',
      borderRadius: 20
    },
    Image: {
      alignSelf: 'center',
      height: size-50,
      width: size-50,
      margin: 10
    }
})