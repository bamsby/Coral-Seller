import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Drawer from 'react-native-drawer';
import SidebarScreen from '../Sidebar/index';
import * as Progress from 'react-native-progress';

import styles from './style';
import CloudLayout from '../partials/Cloud/index';

export default class BrowseCampaignsScreen extends Component {

  openSideBar = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SidebarScreen active="browsecampaign"/>}
        side="left"
        acceptTap={true}
        tapToClose={true}
        acceptDoubleTap
        acceptPan
        captureGestures={true}
        tweenDuration={200}
        tweenEasing={'linear'}
        panThreshold={0.08}
        openDrawerOffset={(viewport) => {
                    return 100
                }}
        closedDrawerOffset={0}
      >
        <ScrollView style={styles.container}>
          <View style={[styles.header]}>
            <Touchable style={[styles.menuIconTouchable]} onPress={() => this.openSideBar()}>
              <Image source={require('../../../assets/images/menu.png')} style={[styles.menuIcon]}/>
            </Touchable>
            <View style={[styles.row, styles.logoContainer]}>
              <Image source={require('../../../assets/images/logo.png')} style={[styles.logo]}/>
              <Text style={[styles.logoText]}>CORAL</Text>
            </View>
            <Touchable style={[styles.greenBtn]} onPress={() => Actions.postsellrequest()}>
              <Text style={[styles.btnText, styles.OswaldRegular]}>CREATE</Text>
            </Touchable>
          </View>

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
                  <Text style={[styles.cardTitle]}>Recycling Drive</Text>
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
        </ScrollView>
      </Drawer>
    );
  }
}
