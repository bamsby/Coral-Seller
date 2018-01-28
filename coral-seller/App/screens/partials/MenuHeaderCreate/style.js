import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#1f1f1d',
    paddingTop: 16,
    paddingBottom: 17,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between'    
  },
  menuIcon: {
    height: 22,
    width: 22,
    marginTop: 10,
    resizeMode: 'contain',
  },
  menuIconTouchable: {
    marginTop: 15,
    marginLeft: 15
  },
  gothamLight:{
    // fontFamily: 'GothamRoundedLight'
  },
  btnText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable: {
    marginTop: 10,    
    marginRight: 15,
    width: 60,
    height: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',    
    justifyContent: 'center'
  },
  greenBtn: {
    backgroundColor: '#3dbb69'
  },
  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 22,
    marginLeft: 20
  }
});
