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
        height : 300,
        backgroundColor : 'white',
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
    }
})

module.exports = style