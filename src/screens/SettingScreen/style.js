import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    content : {
        padding : 16,
        paddingTop : 0,
    },
    header : {
        padding : 16,
        paddingBottom : 0
    },
    topNav : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingBottom : 20,
    },
    filter : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center'
    },
    action : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center'
    },
    boxShadow: {
        marginTop : 20,
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 1,
      },
      text : {
          fontFamily : 'Metropolis-Medium',
          fontSize : 16,
      },
      sp : {
        paddingTop : 16,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
      },
      change : {
          color : '#9B9B9B',
          fontFamily : 'Metropolis-Regualar',
          fontSize : 14
      }
})

module.exports = style