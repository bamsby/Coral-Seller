import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';
import BackMenuHeader from '../partials/BackMenuHeader/index';

export default class CollectorsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <BackMenuHeader menuTitle="COLLECTORS" />

        <View style={[styles.body]}>
          <Text style={[styles.notification]}>Found 3 collectors for your selection</Text>

          <View style={[styles.pageView]}>
            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <View style={[styles.name]}>
                  <Text style={[styles.title]}>DANNY</Text>
                  <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                </View>
                <Text style={[styles.description]}> Collects newspaper and old clothes. </Text>
                <Text style={[styles.description]}> Available during weekdays only. Call to arrange. </Text>
                <Text style={[styles.phone]}><FontAwesome name="phone" size={9} />  +65-98765432 </Text>
              </View>
            </View>

            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <View style={[styles.name]}>
                  <Text style={[styles.title]}>TIM</Text>
                  <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                </View>
                <Text style={[styles.description]}> Collects newspaper and old clothes. </Text>
                <Text style={[styles.description]}> Available during weekdays only. Call to arrange. </Text>
                <Text style={[styles.phone]}><FontAwesome name="phone" size={9} />  +65-98765432 </Text>
              </View>
            </View>

            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <View style={[styles.name]}>
                  <Text style={[styles.title]}>SEBASTIAN</Text>
                  <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                </View>
                <Text style={[styles.description]}> Collects newspaper and old clothes. </Text>
                <Text style={[styles.description]}> Available during weekdays only. Call to arrange. </Text>
                <Text style={[styles.phone]}><FontAwesome name="phone" size={9} />  +65-98765432 </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


