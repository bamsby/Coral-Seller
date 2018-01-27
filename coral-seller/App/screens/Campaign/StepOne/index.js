/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { Select } from 'teaset';

import styles from './style';
import GreenMenuHeader from '../../partials/GreenHeader/index';

export default class CampaignStepOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignTitle: 'Your Campaign Title',
      campaignDetails: 'Your Campaign Details',
      campaignGoal: 'Your Campaign Goals',
      items: [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <GreenMenuHeader menuTitle="CREATE YOUR CAMPAIGN" />
        <View style={[styles.stepIndicatorContainer]}>
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
        </View>

        <View style={[styles.form]}>
          <View style={[styles.inputContainer]}>
            <TextInput
              onChangeText={(text) => this.setState({ campaignTitle: text })}
              style={[styles.inputStyle]}
              placeholder="Your Campaign Title"
            />
            <Text style={[styles.inputChar]}>0/10</Text>
          </View>

          <View style={[styles.inputContainer]}>
            <TextInput
              onChangeText={(text) => this.setState({ campaignDetails: text })}
              style={[styles.inputStyle, { height: 82.5, paddingTop: 16 }]}
              placeholder="Your Campaign Details"
              multiline
            />
            <Text style={[styles.inputChar]}>0/30</Text>
          </View>

          {/* select picker */}
          <View style={[styles.inputContainer]}>
            <Select
              style={styles.selectStyle}
              value={this.state.itemValue}
              items={this.state.items}
              placeholder='Type of Recyclables'
              onSelected={(item, index) => this.setState({ itemValue: item })}
              placeholderTextColor="#8d8d8c"
            />
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              onChangeText={(text) => this.setState({ campaignDetails: text })}
              style={[styles.inputStyle]}
              placeholder="Your Goal (Eg. 5000 Kg of materials)"
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Touchable style={[styles.chbxBtn, { marginLeft: 0, backgroundColor: '#2fac5d' }]}>
              <Text style={[styles.btnText]}>KG</Text>
            </Touchable>
            <Touchable style={[styles.chbxBtn]}>
              <Text style={[styles.btnText]}>PCS</Text>
            </Touchable>
            <Touchable style={[styles.chbxBtn]}>
              <Text style={[styles.btnText]}>S</Text>
            </Touchable>
            <Touchable style={[styles.chbxBtn]}>
              <Text style={[styles.btnText]}>KM</Text>
            </Touchable>
            <Touchable style={[styles.chbxBtn, { marginRight: 0 }]}>
              <Text style={[styles.btnText]}>-</Text>
            </Touchable>
          </View>

          <Touchable style={[styles.btnTouchable, styles.greenBtn]} onPress={() => Actions.champaignsteptwo()}>
            <Text style={[styles.btnText]}>NEXT</Text>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}
