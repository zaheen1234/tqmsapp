/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { BASEURL } from '../routes/constants/Constants';

// const Login: () => React$Node = () => {
export default class Login extends Component<{}> {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      dataSource: [],
      showAlert: false,
      message: ''
    }

  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  login = () => {

    if (this.state.username == "") {
     this.setState({
       message: "Email ID can't be blank"
     });
     this.showAlert();
      return;
    }

    if (this.state.password == "") {
      this.setState({
        message: "Password can't be blank"
      });
      this.showAlert();
      return;
    }
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.validateLogin');
    data.append('email', this.state.username)
    data.append('password', this.state.password);
    // data.append('email', 'bonnie.pearce@tqms.com.au');
    // data.append('password', '123456');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');

    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        // console.log("K_____ res :- " , JSON.stringify(res));
        //  alert(JSON.stringify(res.data));
        if (res.data.status == "200") {
          Actions.Home();
        } else {
         // alert(res.data.message);
          this.setState({
            message: res.data.message
          });
          this.showAlert();
        }

      })
      .catch(error => {
        // alert("K_____ error :- " + error);
      });

  }
  handleClick = () => {
    Actions.Home();
  };

  render() {

    const { showAlert } = this.state;


    return (
      <View style={styles.wholeBody}>
        <SafeAreaView >
          <View style={styles.logoContainer}>
            <Image source={require('./../images/logo/TQMSlogo.png')}
              style={styles.logo} />
          </View>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Error!"
            message={this.state.message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Okay"
            confirmButtonColor="#549622"
            contentContainerStyle={styles.alertContainerStyle}
            titleStyle={{ color: 'red', fontSize: 24 }}
            messageStyle={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}
            confirmButtonStyle={{ width: 100 }}
            confirmButtonTextStyle={{ alignItems: 'center', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}
            onCancelPressed={() => {
              this.hideAlert();
            }}
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
          <View style={styles.usernameContainer}>
            <TextInput
              style={styles.userName}
              placeholder="Email"
              placeholderTextColor="grey"
//               autoCapitalize="none"
//  d              autoCorrect="none"
              onChangeText={text => this.setState({ username: text })}
            />
          </View >

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.password}
              placeholder="Password"
              placeholderTextColor="grey"
              // autoCapitalize="none"
              //  autoCorrect="none"
              secureTextEntry={true}
              onChangeText={text => this.setState({ password: text })}
            />
          </View>

          <View style={styles.submitContainer}>
            <TouchableHighlight
              style={styles.submit}
              onPress={this.login}

            >
              <Text style={styles.submitText}>Log in</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </View>

    );
  }
};

const styles = StyleSheet.create({

  wholeBody: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },

  logoContainer: {
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    height: 100,
    width: 300,
  },

  usernameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },

  passwordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },

  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  },

  submitText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },

  submit: {

    marginTop: 10,
    borderRadius: 10,
    height: 50,
    width: '50%',
    backgroundColor: "#05afee",
    textAlign: 'center'
  },

  userName: {

    backgroundColor: "#fff",
    height: 50,
    width: '50%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'


  },

  password: {
    backgroundColor: "#fff",
    height: 50,
    width: '50%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'


  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

