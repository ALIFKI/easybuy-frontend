import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const style = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 13,
    paddingRight: 13,
    height: 100,
    marginBottom: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 39,
    marginBottom: 21,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    height: 100,
    marginTop: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
  },

  button: {
    marginTop: 39,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#222222',
    width: '100%',
    height: 60,
    borderRadius: 50,
  },
});

module.exports = style;
