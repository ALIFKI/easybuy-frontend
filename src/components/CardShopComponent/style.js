import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    cardProduct: {
        display : 'flex',
        backgroundColor : 'white',
        flexDirection : 'row',
        borderRadius : 10,
        marginBottom : 20,
    },
    image : {
        height : 104,
        width : 104,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
    },
    detail : {
        padding : 10,
    },
        type : {
            fontFamily : 'Metropolis-Medium',
            fontSize : 16,
            color : '#222'
        },
        model : {
            color : '#ACACAC',
            fontFamily : 'Metropolis-Regular',
            fontSize : 11,
            paddingBottom : 5,
        },
        price : {
            fontFamily : 'Metropolis-Medium',
            fontSize : 14,
        }
})


module.exports = style