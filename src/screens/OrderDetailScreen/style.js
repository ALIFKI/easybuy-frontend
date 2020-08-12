import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    content : {
        padding : 16
    },
    header : {
        display : 'flex'
    },
    list : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingBottom : 10
    },
    text : {
        fontSize : 14,
        fontFamily : 'Metropolis-Regular',
        color :'black'
    },
    accent : {
        fontSize : 14,
        fontFamily : 'Metropolis-Regular',
        color : '#9B9B9B'
    },
    status : {
        color : '#2AA952',
        fontFamily : 'Metropolis-Regular'
    },
    sp : {

    },
    cardProduct: {
        display : 'flex',
        backgroundColor : 'white',
        flexDirection : 'row',
        borderRadius : 10,
        marginBottom : 20,
    },
    image : {
        height : 120,
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
        },
    listOrder : {
        paddingTop : 16
    },
    sizeColor : {
        display : 'flex',
        flexDirection : 'row',
        paddingRight : 10

    },
    font : {
        fontFamily : 'Metropolis-Medium',
        fontSize : 12,
    },
    bottomContent : {
        backgroundColor : 'white',
        position : 'absolute',
        left : 0,
        right : 0,
        height : 90,
        bottom : 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        // alignItems : 'center',
        padding : 20,
    },
    half : {
        width : 150
    }
})

module.exports = style