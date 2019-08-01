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
import { Checkbox } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as CONSTANT from '../Constant'

export default class KategoriCheckbox extends React.Component {

  state = {
    marginLeft: 5,
    marginRight: 5
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: wp('40%')}}>
        <Checkbox
          status={this.props.item.checked}
          onPress={() => {this.props.onChecked()}}
          color={CONSTANT.COLOR_ACCENT}
        />
        <Text style={{fontSize: 16}}>{this.props.item.label}</Text>
      </View>
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