import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const style = StyleSheet.create({
  container: {
    marginLeft: 13,
    marginTop: 12,
    marginRight: 13,
    height: 100,
  },

  Card: {
    backgroundColor: 'white',
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginTop: 29,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

module.exports = style;
