import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const style = StyleSheet.create({
  container: {
    marginLeft: 13,
    marginTop: 12,
    marginRight: 13,
    height: 100,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 19,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',

    marginTop: 30,
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
});

module.exports = style;
