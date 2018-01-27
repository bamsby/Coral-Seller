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
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as Progress from 'react-native-progress';

import styles from './style';
import MenuHeader from '../partials/MenuHeader/index';
import CloudLayout from '../partials/Cloud/index';

export default class MyCampaignsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email Address',
      npswd: 'New Password',
      rpswd: 'Re-enter Password',
      cpswd: 'Current Password',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader menuTitle="MY CAMPAIGNS" />

        <View style={[styles.body]}>
          <View style={[styles.pageIndicator]}>
            <View style={[styles.campaingCloud]}>
              <CloudLayout cloudText="STILL GOING" linkTo="" isActive bgColor="#3bb866" />
            </View>
            <View style={[styles.campaingCloud]}>
              <CloudLayout cloudText="FINISHED" linkTo="" isActive={false} bgColor="#eb3a46" />
            </View>
          </View>

          <View style={[styles.pageView]}>
            <View style={[styles.champaignCard]}>
              <View style={[styles.cardHeader]}>
                <Text style={[styles.cardTitle]}>RECYCLING DRIVE</Text>
                <Text style={[styles.authorText]}>by Kolam Ayer Whampoa South RC</Text>
                <Text style={[styles.cardText]}>
                  Lorem ipsum dolor sit amet, quo te copiosae periculis.
                  Qui no animal voluptua vituperata, ut nec vitae tantas eirmod.
                   An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos.
                    Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                </Text>
              </View>
              {/*progress bar*/}
              <View>
                <Progress.Bar
                  progress={0.79}
                  width={350}
                  unfilledColor="#000"
                  borderWidth={0}
                  borderRadius={0}
                  color="#3bb866"
                  height={32.5}
                />
                <Text style={[styles.progressText]}>79% Pledged</Text>
              </View>

              <View style={[styles.cardFooter]}>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>5000KG</Text>
                  <Text style={[styles.span, styles.orange]}> Goal</Text>
                </View>
                <View style={[styles.li, styles.border]}>
                  <Text style={[styles.p]}>30</Text>
                  <Text style={[styles.span, styles.red]}> Days To Go</Text>
                </View>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>125</Text>
                  <Text style={[styles.span, styles.green]}> Backers</Text>
                </View>
              </View>
            </View>

            <View style={[styles.champaignCard]}>
              <View style={[styles.cardHeader]}>
                <Text style={[styles.cardTitle]}>RECYCLING DRIVE</Text>
                <Text style={[styles.authorText]}>by Kolam Ayer Whampoa South RC</Text>
                <Text style={[styles.cardText]}>
                  Lorem ipsum dolor sit amet, quo te copiosae periculis.
                  Qui no animal voluptua vituperata, ut nec vitae tantas eirmod.
                   An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos.
                    Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                </Text>
              </View>
              {/*progress bar*/}
              <View>
                <Progress.Bar
                  progress={0.79}
                  width={350}
                  unfilledColor="#000"
                  borderWidth={0}
                  borderRadius={0}
                  color="#3bb866"
                  height={32.5}
                />
                <Text style={[styles.progressText]}>79% Pledged</Text>
              </View>

              <View style={[styles.cardFooter]}>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>5000KG</Text>
                  <Text style={[styles.span, styles.orange]}> Goal</Text>
                </View>
                <View style={[styles.li, styles.border]}>
                  <Text style={[styles.p]}>30</Text>
                  <Text style={[styles.span, styles.red]}> Days To Go</Text>
                </View>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>125</Text>
                  <Text style={[styles.span, styles.green]}> Backers</Text>
                </View>
              </View>
            </View>

            <View style={[styles.champaignCard]}>
              <View style={[styles.cardHeader]}>
                <Text style={[styles.cardTitle]}>RECYCLING DRIVE</Text>
                <Text style={[styles.authorText]}>by Kolam Ayer Whampoa South RC</Text>
                <Text style={[styles.cardText]}>
                  Lorem ipsum dolor sit amet, quo te copiosae periculis.
                  Qui no animal voluptua vituperata, ut nec vitae tantas eirmod.
                   An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos.
                    Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                </Text>
              </View>
              {/*progress bar*/}
              <View>
                <Progress.Bar
                  progress={0.79}
                  width={350}
                  unfilledColor="#000"
                  borderWidth={0}
                  borderRadius={0}
                  color="#3bb866"
                  height={32.5}
                />
                <Text style={[styles.progressText]}>79% Pledged</Text>
              </View>

              <View style={[styles.cardFooter]}>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>5000KG</Text>
                  <Text style={[styles.span, styles.orange]}> Goal</Text>
                </View>
                <View style={[styles.li, styles.border]}>
                  <Text style={[styles.p]}>30</Text>
                  <Text style={[styles.span, styles.red]}> Days To Go</Text>
                </View>
                <View style={[styles.li]}>
                  <Text style={[styles.p]}>125</Text>
                  <Text style={[styles.span, styles.green]}> Backers</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
