import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    productCardWrapper : {
        paddingTop : 20,
        paddingBottom : 20
    },
    productCard : {
    },
    styles : {
        fontFamily : 'Metropolis-Regular',
        fontSize : 14,
        color : '#ACACAC'
    },
    model : {
        fontFamily : 'Metropolis-Medium',
        color : '#222222',
        fontSize : 16
    },
    price : {
        fontFamily : 'Metropolis-Regular',
        color : '#222222'
    },
    DetailProduct : {
        margin : 5,
        paddingTop : 5,
    },
    Badge : {
        zIndex : 2,
        top : 10,
        left : 10,
        backgroundColor : '#222222',
        position : 'absolute',
        borderRadius : 20
    },
    badgeText : {
        padding : 2,
        paddingLeft : 5,
        paddingRight : 5,
        fontFamily : 'Metropolis-Bold',
        fontSize : 14,
        color : 'white'
    }
})

module.exports = style
