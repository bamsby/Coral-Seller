import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#1f1f1d',
    paddingTop: 30,
    paddingBottom: 5,
    position: 'relative'
  },
  menuIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  menuIconTouchable: {
    position: 'absolute',
    left: 11,
    bottom: 8,
    zIndex: 9,
    padding: 5
  },

  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular'
  },

  row: {
    flexDirection: 'row'
  },
  logo: {
    width: 42,
    height: 42,
    resizeMode: 'cover'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText:{
    fontSize: 20,
    fontFamily: 'gotham-round',
    color: '#55d400',
  },
  OswaldRegular: {
    fontFamily: 'Oswald-Regular'
  },
  OpenSansSemiBold: {
    fontFamily: 'open-sans-semibold'
  },
  greenBtn: {
    height: 23,
    paddingHorizontal: 7,
    backgroundColor: '#38b663',
    position: 'absolute',
    right: 10,
    bottom: 13
  },
  btnText: {
    color: '#fff'
  },
  body: {
    // paddingHorizontal: 53,
    paddingTop: 10
  },
  pageIndicator: {
    flexDirection: 'row',
    paddingHorizontal: 31
  },
  campaingCloud: {
    flex: 1,
    marginHorizontal: 3,
    marginBottom: 17
  },
  pageView: {
    paddingHorizontal: 13
  },
  champaignCard: {
    marginBottom: 7
  },
  cardHeader: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 11,
    paddingVertical: 7
  },
  cardTitle: {
    // fontSize: 10,
    color: '#1f1f1d',
    fontFamily: 'Oswald-Regular'
  },
  cardText: {
    fontSize: 7.5,
    // fontFamily: 'OpenSans',
    // fontWeight: 'light'
  },
  authorText: {
    fontSize: 7.5,
    fontFamily: 'open-sans-light',
    // fontWeight: 'light',
    position: 'absolute',
    top: 8,
    right: 5
  },
  cardFooter: {
    backgroundColor: '#d8d8d8',
    paddingVertical: 8,
    flexDirection: 'row'
  },
  li: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    // fontSize: 12.5,
    fontSize: 14,
    fontFamily: 'Oswald-Regular'
  },
  span: {
    // fontSize: 9,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'open-sans-light',
    // fontWeight: 'light',
  },
  orange: {
    color: '#ee8c3c'
  },
  red: {
    color: '#eb3a46'
  },
  green: {
    color: '#3bb866'
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  progressText: {
    fontSize: 12.5,
    fontFamily: 'open-sans-semibold',
    color: '#fff',
    position: 'absolute',
    top: 6,
    backgroundColor: 'transparent',
    left: 175,
  }
});
