import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { StyleSheet, View, StatusBar } from 'react-native';

import LoginScreen from './screens/Login/index';
import SignupScreen from './screens/Signup/index';
import ForgotPswdScreen from './screens/ForgotPassword/index';
import AccountSettingScreen from './screens/AccountSetting/index';
import BrowseCampaignsScreen from './screens/BrowseCampaigns/index';
import RecyclingDriveUpdateScreen from './screens/RecyclingDrive/Updates/index';
import RecyclingDriveCommentScreen from './screens/RecyclingDrive/Comments/index';
import PostSellRequestScreen from './screens/PostSellRequest/index';
import CollectorsScreen from './screens/Collectors/index';
import PaymentScreen from './screens/Payment/index';

const RouterComponent = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={LoginScreen} initial />
          <Scene key="signup" component={SignupScreen} />
          <Scene key="forgotpswd" component={ForgotPswdScreen} />
          <Scene key="acctsetting" component={AccountSettingScreen} />
          <Scene key="browsecampaign" component={BrowseCampaignsScreen} />
          <Scene key="recyclingdriveupdate" component={RecyclingDriveUpdateScreen} />
          <Scene key="recyclingdrivecomment" component={RecyclingDriveCommentScreen} />
          <Scene key="postsellrequest" component={PostSellRequestScreen} />
          <Scene key="collectors" component={CollectorsScreen} />
          <Scene key="payment" component={PaymentScreen} />
        </Stack>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RouterComponent;
