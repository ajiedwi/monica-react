import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native'

export default class InputImage extends React.Component {

  render() {
    return (
      <View style={[styles.bgInput, {width: this.props.width}]}>
        <TextInput
          maxLength={15}
          style={[styles.input, {color: 'white'}]}
          placeholder={this.props.hint}
          placeholderTextColor={'#ffffff90'}
          
        />
        <Image
          source={this.props.image}
          style={{alignSelf: 'center', height: 20, width: 20}}
          resizeMode='contain'
        />
      </View>
    )
  }


}

const styles = StyleSheet.create({
    bgInput: {
        backgroundColor: '#ffffff50',
        height: 40,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
      flex: 4
    }
})