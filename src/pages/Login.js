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

var { height, width } = Dimensions.get('window');

const LIST = [
  {
    value: 'user',
    label: 'User'
  },
  {
    value: 'vendor',
    label: 'Vendor'
  }
]

export class Login extends React.Component {

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
        <View style={{flex: 1}}>
          <Image style={{ flex: 1, width: "100%", height: "100%"}}
          source={require('../assets/images/ex_bg.jpg')}/>
          <View style={styles.semiTransparent}>
            <Text style={styles.monicaText}>Monica</Text>
          </View>
        </View>
        <View style={[{flex: 2}, styles.form]}>
          <Text style={styles.welcomeText}>Selamat Datang</Text>
          <Text style={styles.silahkanText}>
            Silahkan Log In untuk mendapatkan kemudahan dalam mencari, menghubungi, dan membayar vendor pernikahan favoritmu.
          </Text>
          <TextInput
            style={styles.formInput}
            label='Username'
            mode='outlined'
            placeholder='Masukkan Email Anda'
            value={this.state.username}
            returnKeyType='next'
            onSubmitEditing={() => { this.password.focus(); }}
            blurOnSubmit={false}
            onChangeText = {(text) => {this.setState({username: text})}}
          />
          <TextInput
            ref={(input) => { this.password = input; }}
            style={styles.formInput}
            label='Password'
            mode='outlined'
            placeholder='Masukkan Password Anda'
            secureTextEntry={true}
            returnKeyType='go'
            value={this.state.password}
            onSubmitEditing={() => { Keyboard.dismiss()}}
            onChangeText = {(text) => {this.setState({password: text})}}
          />
          <Text style={styles.lupaText}>Lupa Password?</Text>
          <AnimateLoadingButton
            ref={c => (this.btnLogin = c)}
            width={width-(2*40)}
            height={50}
            title="Log In"
            titleFontSize={16}
            backgroundColor={CONSTANT.COLOR_ACCENT}
            titleColor="rgb(255,255,255)"
            marginTop={20}
            borderRadius={4}
            style={styles.loginButton}
            onPress={this._onPressBotton2Handler}
            contentStyle={{alignSelf: 'center'}}
          />
          <Text style={styles.registerText}>
              Belum memiliki akun?
              <Text style={{color: 'red'}} onPress={() => {this.setState({singlePickerVisible: true})}}>
                  {" Register"}
              </Text>
          </Text>
        </View>
        <SinglePickerMaterialDialog
          title={'Registrasi sebagai :'}
          items={LIST.map((item) => ({ value: item.value, label: item.label }))}
          colorAccent={CONSTANT.COLOR_ACCENT}
          visible={this.state.singlePickerVisible}
          onCancel={() => this.setState({ singlePickerVisible: false })}
          onOk={result => {
            this.setState({ singlePickerVisible: false });
            this.props.navigation.navigate('RegisterUser')
          }}
        />
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
    padding: 40,
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
    marginTop: 20
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
    backgroundColor: 'rgb(36,201,226)',
  }
})