import React from "react";
import { 
  View, 
  Image, 
  StyleSheet,
  Text,
  Dimensions,
  Keyboard,
  StatusBar
} from "react-native";
import { TextInput, Button } from 'react-native-paper';
import {FlatList} from 'react-native'
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { login } from '../redux/action'
import * as CONSTANT from '../Constant'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from "react-native-gesture-handler";
import KategoriCheckbox from '../components/KategoriCheckbox'
import * as DUMMY from '../Dummy'

const mockData = [
    {
        label: 'label1',
        value: 'one'
    },
    {
        label: 'label2',
        value: 'two'
    },
    {
        label: 'label3',
        value: 'three'
    },
];
var { height, width } = Dimensions.get('window');

export class RegisterVendor2 extends React.Component {

  state = {
    username: '',
    password: '',
    singlePickerVisible: false,
    dummyKategori: []
  }

  onChecked = (index) => {
    var itemNow = [...this.state.dummyKategori]
    {(itemNow[index].checked=='checked') ? itemNow[index].checked='unchecked': itemNow[index].checked='checked'}
    this.setState({dummyKategori: itemNow})
  }

  constructor(props) {
    super(props);
    // this._onPressBotton2Handler = this._onPressBotton2Handler.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.user)  
    this.setState({dummyKategori: DUMMY.dummyKategori})
  }

  componentWillUnmount(){
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#ef5656" barStyle="light-content" />
        <View style={{height: hp('15%')}}>
          <Image style={{ flex: 1, width: "100%", height: "100%"}}
          source={require('../assets/images/ex_bg.jpg')}/>
          <View style={styles.semiTransparent}>
            <Text style={styles.monicaText}>Monica</Text>
          </View>
        </View>
        <View style={[styles.form]}>
          <Text style={styles.welcomeText}>Register</Text>
          <FlatList
            data={this.state.dummyKategori}
            horizontal={false}
            numColumns={2}
            style={{alignSelf: 'center', width: '100%'}}
            renderItem={({ item: item,index }) => {
            return (
              <KategoriCheckbox
                item={item}
                onChecked={() => {this.onChecked(index)}}          
              />
            )}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
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
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingLeft: 40,
      paddingBottom: 30
  },
  monicaText: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'scriptina_regular',
    textTransform: 'capitalize'
  },
  form: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcomeText: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black'
  },
  silahkanText: {
    marginTop: 10,
    textAlign: 'left',
  },
  formInput: {
    width: '100%',
    marginTop: 10
  },
  lupaText: {
    marginTop: 20,
    width: '100%',
    color: 'red',
    justifyContent: 'flex-end',
    textAlign: 'right',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  registerText: {
    color: 'black',
    marginTop: 40,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20
  }
})