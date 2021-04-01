/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


// const Login: () => React$Node = () => {
export default class Home extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      client: 'Select Client',
      qualification: 'Select Qualification',
      workArea: 'Select Work Area',
      group: 'Select Group',
      form: 'Select TAR/WER/SA/AJC',
      color: 'normal'
    }
  }

  handleClick = () => {
   Actions.Profile();
  }

  handleClick2 = () => {
  //  Actions.TarForm();
  //  Actions.WerForm();
    //  Actions.SaForm();
   Actions.AjcForm();

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
                <View style={{ paddingTop: '1%', paddingLeft: '5%' }}>
                  <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                    User Name : Hello, Greg Cotter
                </Text>
                </View>
              </Col>

              <Col style={styles.userDetailsCol1}>
                <TouchableHighlight
                  style={styles.profileBtn}
                  onPress={() => this.handleClick('save')}
                  underlayColor={'#809fff'}>
                  <Text style={styles.profileText}>Profile
                    <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: 20 }} />
                  </Text>

                </TouchableHighlight>
              </Col>
            </Row>
          </View>
          <Row>
            <Col style={{ width: '25%' }}>
            </Col>

            <Col style={{ width: '50%', height: 800, justifyContent: 'center' }}>
              <View style={styles.pickerContainer}>
                <DropDownPicker
                  items={[
                    { label: 'Select Client', value: 'Select Client', hidden: false },
                    { label: 'Don KR', value: 'Don KR' },
                    { label: 'Holco', value: 'Holco' },
                    { label: 'Koallah Farm', value: 'Koallah Farm' },
                    { label: 'Meat Inspectors', value: 'Meat Inspectors' },
                    { label: 'Meat Inspectors - Point Cook', value: 'Meat Inspectors - Point Cook' },
                  ]}
                  labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500'}}
                  defaultValue={this.state.client}
                  containerStyle={styles.containerStyleForDropdown}
                  style={styles.pickerCls}
                  itemStyle={{
                    justifyContent: 'flex-start',
                   
                  }}
                  dropDownStyle={{ width: '100%', fontSize: 50, fontWeight: 'bold' }}
                  onChangeItem={item => this.setState({
                    client: item.value
                  })}
                />
                <View style={styles.nestedView}>
                  <DropDownPicker
                    items={[
                      { label: 'Select Qualification', value: 'Select Qualification', hidden: false },
                      { label: 'AMP3091DN- Bacon Slicing', value: 'AMP3091DN- Bacon Slicing' },
                      { label: 'AMP3091DN- Bacon Slicing(new)', value: 'AMP3091DN- Bacon Slicing(new)' },
                      { label: 'AMP3091DN- Bacon Production', value: 'AMP3091DN- Bacon Production' },
                    ]}
                    labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500'}}
                    defaultValue={this.state.qualification}
                    containerStyle={styles.containerStyleForDropdown}
                    style={styles.pickerCls}
                    itemStyle={{
                      justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ width: '100%' }}
                    onChangeItem={item => this.setState({
                      qualification: item.value
                    })}
                  />

                  <View style={styles.nestedView}>
                    <DropDownPicker
                      items={[
                        { label: 'Select Work Area', value: 'Select Work Area', hidden: false },
                        { label: 'Bacon Production', value: 'Bacon Production' },
                        { label: 'Bacon Slicing', value: 'Bacon Slicing' },
                        { label: 'Ham Production', value: 'Ham Production' },
                        { label: 'Quality Assurance', value: 'Quality Assurance' },
                      ]}
                      labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500'}}
                      defaultValue={this.state.workArea}
                      containerStyle={styles.containerStyleForDropdown}
                      style={styles.pickerCls}
                      itemStyle={{
                        justifyContent: 'flex-start'
                      }}
                      dropDownStyle={{ width: '100%' }}
                      onChangeItem={item => this.setState({
                        workArea: item.value
                      })}
                    />

                    <View style={styles.nestedView}>
                      <TextInput
                        style={styles.selectStudent}
                        placeholder="Select Student"
                        placeholderTextColor="#555555"
                      
                      />

                      <View style={styles.nestedView}>
                        <DropDownPicker
                          items={[
                            { label: 'Select Group', value: 'Select Group' },
                            { label: 'Don KR', value: 'Don KR' },
                            { label: 'Holco', value: 'Holco' },
                            { label: 'Koallah Farm', value: 'Koallah Farm' },
                            { label: 'Meat Inspectors', value: 'Meat Inspectors' },
                            { label: 'Meat Inspectors - Point Cook', value: 'Meat Inspectors - Point Cook' },
                          ]}
                          labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500'}}
                          defaultValue={this.state.group}
                          containerStyle={styles.containerStyleForDropdown}
                          style={styles.pickerCls}
                          itemStyle={{
                            justifyContent: 'flex-start'
                          }}
                          dropDownStyle={{ width: '100%' }}
                          onChangeItem={item => this.setState({
                            group: item.value
                          })}
                        />
                        <View style={styles.nestedView}>
                          <DropDownPicker
                            items={[
                              { label: 'Select TAR/WER/SA/AJC', value: 'Select TAR/WER/SA/AJC', hidden: true },
                              { label: 'TAR (Training Attendance Record)', value: 'TAR (Training Attendance Record)' },
                              { label: 'WER (Workplace Evidence Report)', value: 'WER (Workplace Evidence Report)' },
                              { label: 'SA (Supervisor Appraisal)', value: 'SA (Supervisor Appraisal)' },
                              { label: 'AJC (Assesor Judgement Coversheet)', value: 'AJC (Assesor Judgement Coversheet)' },
                            ]}
                            labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500'}}
                            defaultValue={this.state.form}
                            containerStyle={styles.containerStyleForDropdown}
                            style={styles.pickerCls}
                            itemStyle={{
                              justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ width: '100%' }}
                            onChangeItem={item => this.setState({
                              form: item.value
                            })}
                          />

                          <View style={styles.submitContainer}>
                            <TouchableHighlight
                              style={styles.submit}
                              onPress={this.handleClick2}
                            >
                              <Text style={styles.submitText}>Submit</Text>
                            </TouchableHighlight>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                </View>



              </View>
            </Col>

            <Col style={{ width: '25%' }}>
            </Col>
          </Row>

        </SafeAreaView>
      </View>
    );
  }
}

//};

const styles = StyleSheet.create({

  userDetailsCol: {
    width: '80%',

  },

  profileText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal'
  },

  userDetailsCol1: {
    width: '15%',

  },

  profileBtn: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: '90%',
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  selectStudent: {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: '500'
,
  },

  containerStyleForDropdown: {
    height: 50, shadowOpacity: .5, shadowRadius: 2, shadowOffset: { width: 2, height: 1 ,
    }
  },

  pickerCls: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'grey',
    
  },

  nestedView: {
    paddingTop: '3%'
  },

  restOfTheBody: {
    justifyContent: 'center'
  },

  pickerContainer: {
    paddingTop: 50,
    minHeight: 300,

  },

  logoContainer: {
    paddingTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',

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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },

  submit: {

    marginTop: 10,
    borderRadius: 5,
    height: 50,
    width: '50%',
    color: "#05afee",
    backgroundColor: "#05afee",
    textAlign: 'center',
  },

  

  userName: {
    backgroundColor: "#e6ecff",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
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
