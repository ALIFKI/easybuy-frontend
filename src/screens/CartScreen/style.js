import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //separated
  mainContent: {
    padding: 16,
  },
});

module.exports = style;
