import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Actions } from 'react-native-router-flux';

import styles from './style';

export default class MenuHeaderCreate extends Component {
  render() {
    return (
    <View style={[styles.header]}>
      <Touchable style={[styles.menuIconTouchable]}>
        <Image source={require('../../../../assets/images/menu.png')} style={[styles.menuIcon]} />
      </Touchable>
      <Text style={[styles.gothamLight, styles.title]}>{this.props.menuTitle}</Text>
      <Touchable style={[styles.btnTouchable, styles.greenBtn]} onPress={() => Actions.postsellrequest()}>
            <Text style={[styles.btnText]}>CREATE</Text>
      </Touchable>
    </View>
    );
  }
}
