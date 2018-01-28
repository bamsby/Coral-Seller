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
import BackMenuHeader from '../partials/BackMenuHeader/index';

export default class PostSellRequestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignTitle: 'Your Campaign Title',
      campaignDetails: 'Your Campaign Details',
      campaignGoal: 'Your Campaign Goals',
      items: [
      'Clothes',
      'Newspaper',
      'Bottles',
      'Books',
      'Uniform',
      'Electronics',
      'Others'
    ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <BackMenuHeader menuTitle="POST SELL REQUEST" />
        <View style={[styles.form]}>
          {/* select picker */}
          <View style={[styles.inputContainer]}>
            <Select
              style={styles.selectStyle}
              value={this.state.itemValue}
              items={this.state.items}
              placeholder='Recyclable Item'
              onSelected={(item, index) => this.setState({ itemValue: item })}
              placeholderTextColor="#969592"
            />
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              onChangeText={(text) => this.setState({ campaignDetails: text })}
              style={[styles.inputStyle]}
              placeholder="Weight [Optional]"
              placeholderTextColor="#969592"
            />
          </View>
          <View style={[styles.cameraContainer]}>
            <Image source={require('../../../assets/images/camera.png')} style={[styles.cameraLogo]} />
            <Text style={styles.photoText}>Take a photo of the item to sell</Text>
          </View>
          <Touchable style={[styles.btnTouchable, styles.greenBtn]} onPress={() => Actions.collectors()}>
            <Text style={[styles.btnText]}>FIND COLLECTOR</Text>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}
