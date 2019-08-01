import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
var { height, width } = Dimensions.get('window');


export default class PencarianFav extends React.Component {

  state = {
    marginLeft: 5,
    marginRight: 5
  }

  componentDidMount(){
    this.setState({marginLeft: 5})
    this.setState({marginRight: 5})
    // console.log(this.props.position)
    // console.log(this.props.lastPosition)
    if(this.props.position === 0){
      this.setState({marginLeft: 10})
    }
    if (this.props.position === this.props.lastPosition-1){
      this.setState({marginRight: 10})
    }
  }

  render() {
    return (
      <View style={[styles.background, {width: (width - 40)/3, marginLeft: this.state.marginLeft, marginRight: this.state.marginRight}]}>
        <Image style={{ flex: 1, width: "100%", height: "100%", borderRadius: 5}}
          source={require('../assets/images/ex_flower_bg.jpg')}/>
        <View style={styles.bgSemiWhite}>
          <Image 
            source={require('../assets/images/ex_flower.jpg')}
            style={{width: 40, height: 40, borderRadius: 20}}
            resizeMode='cover'
            />
          <Text style={styles.textJudul} numberOfLines={1}>{this.props.title}</Text>
          <Text style={styles.textSubJudul} numberOfLines={1}>{this.props.subtitle}</Text>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
    background: {
      height: 200,
      borderRadius: 5,
      elevation: 5
    },
    bgSemiWhite: {
      position: 'absolute',
      backgroundColor: '#ffffff00',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 10
    },
    textJudul: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    textSubJudul: {
      color: 'white',
      fontSize: 12,
    },
    input: {
      flex: 4
    }
})