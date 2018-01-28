import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: 10
  },
  notification: {
    fontSize: 12.5,
    color: '#ec3b47',
    fontFamily: 'Oswald-Regular',
    lineHeight: 12.5,
    marginLeft: 13,
    paddingBottom: 20
  },
  pageView: {
    paddingHorizontal: 13
  },
  backerCard: {
    marginBottom: 9
  },
  media: {
    height: 54,
    width: 54,
    backgroundColor: '#acacac',
    borderRadius: 54 / 2,
    position: 'absolute',
    left: 0
  },
  text: {
    borderBottomWidth: 0.5,
    marginLeft: 68,
    borderBottomColor: '#acacac',
    paddingTop: 11,
    paddingBottom: 7
  },
  name: {
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontSize: 12.5,
    color: '#1f1f1d',
    fontFamily: 'Oswald-Regular',
    lineHeight: 12.5
  },
  code: {
    color: '#0f83d3',
    fontSize: 10,
    lineHeight: 13.7,
    marginLeft: 10,
    fontFamily: 'open-sans-semibold'
  },
  description: {
    color: '#6a6a6a',
    fontSize: 10,
    lineHeight: 13.7,
    fontFamily: 'open-sans-semibold'
  },
  phone: {
    color: '#6a6a6a',
    fontSize: 10,
    position: 'absolute',
    top: 11,
    right: 15,
    fontFamily: 'open-sans-semibold',
  }
});
