/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';

import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import Icon from 'react-native-vector-icons/Feather';
// import { fapencilsquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Actions } from 'react-native-router-flux';

import DropDownPicker from 'react-native-dropdown-picker';


// const Login: () => React$Node = () => {
export default class Profile extends Component<{}> {
  constructor() {
    super();
    this.state = {
      prefix: 'Mr.'
        }
  }
  handleClick = (type) => {
    if (type == 'logout') {
      Actions.Login();
    } else if (type == 'save') {
      // do nothing
    } else if (type == 'form') {
      Actions.Home();
    } else if (type == 'students') {
      Actions.Students();
    } else {
      // else condition
    }
  }

  handleClickSignature = () => {
    // navigation.navigate('Students');
  }

  render() {
    return (
      <View style={styles.wholeBody}>
        <SafeAreaView>
         

            <View style={styles.logoContainer}>
              <Image source={require('./../images/logo/TQMSlogo.png')}
                style={styles.logo} />
            </View>
            <View style={styles.userDetails}>
              <Row>
                <Col style={styles.userDetailsCol}>
                  <View style={{paddingTop:'2%', paddingLeft: '5%'}}>
                  <Text style={{fontSize: 20, fontWeight: "600", color: 'white'}}>
                    User Name : Hello, Greg Cotter
                </Text>
                  </View>
                </Col>

                <Col style={styles.userDetailsCol1}>
                  <TouchableHighlight
                    style={styles.submitSave}
                    onPress={() => this.handleClick('save')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Save
                    {/* <FontAwesomeIcon icon="check-square" /> */}
                    <FontAwesomeIcon icon="pen-square" size={20} style={{color: 'white', marginLeft: 20}}/>
                    </Text>
                  </TouchableHighlight>
                </Col>

                <Col style={styles.userDetailsCol2}>
                  <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.handleClick('form')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Form
                    <FontAwesomeIcon icon="check-square" size={20} style={{color: 'white', marginLeft: 20 }}/></Text>
                  </TouchableHighlight>
                </Col>

                <Col style={styles.userDetailsCol3}>
                  <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.handleClick('students')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Students
                    <FontAwesomeIcon icon="users" size={20} style={{color: 'white', marginLeft: 20}}/>
                    </Text>
                  </TouchableHighlight>
                </Col>

                <Col style={styles.userDetailsCol4}>
                  <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.handleClick('logout')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Logout !
                    <FontAwesomeIcon icon="power-off" size={20} style={{color: 'white', marginLeft: 20}}/>
                    </Text>
                  </TouchableHighlight>

                </Col>
              </Row>
            </View>

            <View style={styles.profileBody}>
              <Row>
                <Col style={styles.prefixCol}>
                  <View style={styles.firstName}>
                  <Text style={{fontSize: 20}}>Prefix<Text style={{color: 'red'}}>*</Text></Text>
                  <View style={styles.onlyPicker}>
                  <DropDownPicker
                  items={[
                    {label: 'Mr.', value: 'Mr.', hidden:true},
                    {label: 'Mrs.', value: 'Mr.'},
                    {label: 'Miss', value: 'Miss'},
                   
                ]}
                  labelStyle={{fontSize: 20}}
                  defaultValue={this.state.prefix}
                  containerStyle={{height: 50}}
                  style={styles.prefixPicker}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={styles.prefixPicker}
                  onChangeItem={item => this.setState({
                      prefix: item.value
                  })}
               />

<View style={{paddingTop: 30}}>
                  <Text style={styles.labelOfBoxed}>First Name<Text style={{color: 'red'}}>*</Text></Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userName}
                    placeholder="Enter your first name"
                    placeholderTextColor="grey">
                  </TextInput>
                  </View>
                  </View>
                  </View>
                  
                  </View>
                 
                 
                 
                  <View style={{paddingTop: 30}}>
                  <Text style={styles.labelOfBoxed}>Email<Text style={{color: 'red'}}>*</Text></Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userNameEmail}
                    placeholder="zaheen@tqms.com"
                    placeholderTextColor="black"
                    editable={false} selectTextOnFocus={false}>
                  </TextInput>
                  </View>
                  </View>

                  <View style={{paddingTop: 30}}>
                  <Text style={styles.labelOfBoxed}>Password</Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userName}
                    placeholder="********"
                    placeholderTextColor="black">
                  </TextInput>
                  </View>
                  </View>
                </Col >

                <Col style={styles.lastNameCol}>
                <View style={{paddingTop: 145}}>
                <Text style={styles.labelOfBoxed}>Last Name<Text style={{color: 'red'}}>*</Text></Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userName}
                    placeholder="Enter your last name"
                    placeholderTextColor="grey">
                  </TextInput>
                  </View>
                  </View>
                 

                  <View style={{paddingTop: 30}}>
                  <Text style={styles.labelOfBoxed}>Phone No</Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userName}
                    placeholder="Enter your phone number"
                    placeholderTextColor="grey">
                  </TextInput>
                  </View>
                  </View>

                  <View style={{paddingTop: 30}}>
                  <Text style={styles.labelOfBoxed}>Re-Password</Text>
                  <View style={styles.textBoxesCls}>
                  <TextInput style={styles.userName}
                    placeholder="********"
                    placeholderTextColor="black">
                  </TextInput>
                  </View>
                  </View>
                  </Col>
<Col style={{width: '10%'}}>
</Col>
                <Col style={styles.signatureCol}>
                  <View style={styles.logoContainerBrowse}>
                    <Image source={require('./../images/logo/avatar.png')}
                      style={styles.logoBrowse} />
                     
                  </View>
                  <View style={styles.signatureCls}>
                  <Text style={{fontWeight: "bold", fontSize: 20, paddingTop: '10%', paddingLeft: '10%'}}>
                    Trainer Signature
                 </Text>
                 <Row>
                   <Col style={{width:'50%'}}>
                   <View style={styles.chooseBtnView}>
                   <TouchableHighlight
                    onPress={() => this.handleClick('save')}
                    underlayColor={'#809fff'}
                    style={styles.chooseFileBtn}>
                    <Text >Choose File
                    </Text>        
                  </TouchableHighlight>
                   </View>
                   </Col>

                   <Col style={{width:'50%'}}>
                   <View style={styles.noFile}>
                   <Text>No file chosen</Text>
                   </View>
                   </Col>
                 </Row>
                
                
                  </View>
                  
                
                
                </Col>
              </Row>

            </View>

         
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  labelOfBoxed:{
    fontSize: 20
  },


  noFile: {
    width: 150,
    paddingTop: 30
  },

  chooseBtnView:{
    width:100,
    paddingTop: 25,
   

  },

  chooseFileBtn:{
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#F0F0F0'
  },

  choodebtn:{
    paddingLeft: 50
  },

  chooseFileCls:{
    borderColor: 'black',
    borderWidth: 1,
    height: 300,
    justifyContent: 'center'
    },

  signatureCls:{
   
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 50

  },

  userDetailsCol: {
    width: '40%',
  }, 

  userDetailsCol1: {
    width: '15%',
  }, 

  userDetailsCol2: {
    width: '15%'

  }, 

  userDetailsCol3: {
    width: '15%',
   
   }, 

  userDetailsCol4: {
    width: '15%',
   
    }, 

  textBoxesCls:{
    paddingTop: 10
  },

  onlyPicker:{
    paddingTop: 10,
  },

  firstName:{
    paddingTop: 30
  },

  prefixPicker: {
    width: 130,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20
  },

  prefixCol: {
    width: '30%',
    height: 700,
    justifyContent: 'center',
    paddingLeft: 50
  },

  signatureCol: {
    width: '25%'
  },
  
  lastNameCol: {
    width: '30%',
    justifyContent: 'center',
  },

  profileBody: {
    height: 1100,
    width: '100%',
    paddingTop: 20,


  },

  logoContainer: {
    paddingTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  logoContainerBrowse: {
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  logoBrowse: {
    height: 250,
    width: 250,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  logo: {
    height: 100,
    width: 300,
  },

  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },

  wholeBody: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },
  userDetails: {
    height: 100,
    width: '100%',
    backgroundColor: '#549622',
    marginTop: 5,
    justifyContent: 'center'
  },

  submitText: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal'

  },
  submit: {
   
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: '85%',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  submitSave:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#05afee',
    height: 40,
    width: '85%',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#05afee',
  },


  userName: {
    backgroundColor: "#fff",
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    color: 'grey',
    fontSize: 20
  },

  userNameEmail:{
    backgroundColor: "#DCDCDC",
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    color: 'grey',
    fontSize: 20
  },

  password: {
    backgroundColor: "#e6ecff",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
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
