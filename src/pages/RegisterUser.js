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
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { login } from '../redux/action'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import * as CONSTANT from '../Constant'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from "react-native-gesture-handler";

var { height, width } = Dimensions.get('window');

const LIST = [
  {
    value: 'user',
    label: 'Laki-laki'
  },
  {
    value: 'vendor',
    label: 'Perempuan'
  }
]

export class RegisterUser extends React.Component {

  state = {
    username: '',
    password: '',
    singlePickerVisible: false
  }

  constructor(props) {
    super(props);
    // this._onPressBotton2Handler = this._onPressBotton2Handler.bind(this);
  }

  _onPressBotton2Handler = () => {
    Keyboard.dismiss()
    // this.btnLogin.showLoading(true);

    // mock
    var data = {
      username : this.state.username,
      password : this.state.password
    }
    this.props.dispatch(login(data))
    setTimeout(() => {
      // this.props.navigation.navigate('Home')
      this.props.navigation.state.params.onSuccess()
      this.props.navigation.goBack()
    }, 1000);
  }

  componentDidMount() {
    // console.log(this.props.user)  
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
          <TextInput
            theme={CONSTANT.INPUT_THEME}
            style={styles.formInput}
            label='Nama'
            mode='outlined'
            placeholder='Masukkan Nama Anda'
            value={this.state.username}
            returnKeyType='next'
            onSubmitEditing={() => { this.password.focus(); }}
            blurOnSubmit={false}
            onChangeText = {(text) => {this.setState({username: text})}}
          />
          <TextInput
            ref={(input) => { this.password = input; }}
            style={styles.formInput}
            label='Email'
            mode='outlined'
            placeholder='Masukkan Password Anda'
            returnKeyType='next'
            theme={CONSTANT.INPUT_THEME}
            value={this.state.password}
            onSubmitEditing={() => { Keyboard.dismiss()}}
            onChangeText = {(text) => {this.setState({password: text})}}
          />
          <View style={[styles.formInput]}>
            {/* <View style={{marginTop: 20,position: 'absolute',borderWidth: 1,borderColor: 'black', width: '100%', height: '100%'}}/> */}
            <Dropdown
              label='Gender'
              data={LIST}
              labelFontSize={18}
              baseColor='black'
            />
          </View>
          <View style={[styles.formInput,{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style={{width: wp('37.5%')}}>
              <Dropdown
                label='Provinsi'
                data={LIST}
                labelFontSize={18}
                baseColor='black'
              />
            </View>
            <View style={{width: wp('37.5%')}}>
              <Dropdown
                label='Kabupaten'
                data={LIST}
                labelFontSize={18}
                baseColor='black'
              />
            </View>
          </View>
          <TextInput
            ref={(input) => { this.password = input; }}
            style={styles.formInput}
            label='Password'
            mode='outlined'
            placeholder='Masukkan Password Anda'
            secureTextEntry={true}
            returnKeyType='go'
            value={this.state.password}
            theme={CONSTANT.INPUT_THEME}
            onSubmitEditing={() => { Keyboard.dismiss()}}
            onChangeText = {(text) => {this.setState({password: text})}}
          />
          <TextInput
            ref={(input) => { this.password = input; }}
            style={[styles.formInput,{marginBottom: 20}]}
            label='Ulangi Password'
            mode='outlined'
            selectionColor={CONSTANT.COLOR_ACCENT}
            placeholder='Ulangi Password Anda'
            secureTextEntry={true}
            returnKeyType='go'
            value={this.state.password}
            theme={CONSTANT.INPUT_THEME}
            onSubmitEditing={() => { Keyboard.dismiss()}}
            onChangeText = {(text) => {this.setState({password: text})}}
          />
          <AnimateLoadingButton
            ref={c => (this.btnLogin = c)}
            width={width-(2*40)}
            height={50}
            title="Register"
            titleFontSize={16}
            backgroundColor={CONSTANT.COLOR_ACCENT}
            titleColor="rgb(255,255,255)"
            marginTop={20}
            borderRadius={4}
            onPress={this._onPressBotton2Handler}
            contentStyle={{alignSelf: 'center'}}
          />
          <Text style={styles.registerText}>
              Sudah memiliki akun?
              <Text style={{color: 'red'}} onPress={() => {this.setState({singlePickerVisible: true})}}>
                  {" Login"}
              </Text>
          </Text>
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