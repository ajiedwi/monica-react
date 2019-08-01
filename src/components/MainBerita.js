import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
var { height, width } = Dimensions.get('window');


export default class HomeGallery extends React.Component {

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
      <View style={[styles.background, {width: width - 60, marginLeft: this.state.marginLeft, marginRight: this.state.marginRight}]}>
        <Image style={{ flex: 3, width: "100%", borderRadius: 5}}
          source={require('../assets/images/ex_gallery.jpg')}/>
        <View style={styles.bgSemiWhite}>
          <Text style={styles.textJudul}>{this.props.title}</Text>
          <Text style={styles.textSubJudul}>{this.props.date}</Text>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
    background: {
      height: 200,
      borderRadius: 5,
      elevation: 2,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom: 3
    },
    bgSemiWhite: {
      position: 'absolute',
      backgroundColor: '#ffffff',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 10,
      flex: 1,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    textJudul: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    textSubJudul: {
      fontSize: 14,
    },
    input: {
      flex: 4
    }
})