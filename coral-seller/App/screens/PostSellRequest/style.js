import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    textAlign: 'center',
    color: '#303030'
  },
  inputContainer: {
    alignItems: 'stretch',
    marginBottom: 10,
  },
  cameraContainer: {
    alignItems: 'stretch',
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: '#cfcecd',
  },
  form: {
    marginTop: 50,
    paddingHorizontal: Dimensions.get('window').width > 320 ? 66 : 26
  },
  selectStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    borderRadius: 0
  },
  cameraLogo: {
    height: 65,
    width: 70,
    alignSelf: 'center'
  },
  photoText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Oswald-Regular',
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable: {
    alignItems: 'center',
    width: 200,
    alignSelf: 'center',
    marginTop: 30,
    height: 41,
    justifyContent: 'center'
  },
  greenBtn: {
    backgroundColor: '#3dbb69'
  },
});
