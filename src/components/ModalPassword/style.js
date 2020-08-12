import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    content : {
        padding : 16,
        position : 'absolute',
        bottom : 0,
        top : 0,
        left : 0,
        right : 0,
        backgroundColor : 'rgba(0,0,0,0.2)',
    },
    modal : {
        position : 'absolute',
        left : 0,
        right : 0,
        height : 350,
        backgroundColor : '#F9F9F9',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        bottom : 0,
        padding : 16,
    },
    header : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    sortBy : {
        fontFamily : 'Metropolis-Medium',
        fontSize : 16,
        paddingTop : 16,
        fontWeight : '600'
    },
    listSort: {
        marginLeft : -16,
        marginRight : -16,
    },
    list : {
        minHeight : 48,
        padding : 16,
        justifyContent : 'center',
    },
    item : {
        fontFamily : 'Metropolis-Regular',
        fontSize : 16,
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
})

module.exports = style