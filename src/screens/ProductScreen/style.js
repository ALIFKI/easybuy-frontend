import {StyleSheet} from 'react-native'


const style = StyleSheet.create({
    content : {
        marginTop : -40,
        minHeight : 300,
        backgroundColor : 'white',
        borderRadius : 20,
        padding : 16,
    },
    bannerContent : {
        display : 'flex',
    },
    image : {
        height : 336,
    },
    title : {
        position: 'absolute',
        left: 16,
        top: 136,

        fontFamily: 'Metropolis-Bold',
        fontSize: 34,
        color : 'white',
    },
    header : {
        paddingTop : 20,
        display : 'flex',
        flexDirection : "row",
        justifyContent : 'space-between',
    },
    textColor : {
        fontFamily : 'Metropolis-Medium',
        fontSize : 16
    },
    textSize : {
        fontFamily : 'Metropolis-Medium',
        fontSize : 16,
        textAlign : 'left'
    },
    colorControl : {
        paddingTop : 14,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
        colorPick : {
            marginRight : 10,
            justifyContent : 'center',
            alignItems : 'center',
            height : 40,
            width : 40,
            borderRadius : 20,
        },
        selected : {
            height : 50,
            width : 50,
            borderRadius : 30,
            borderWidth : 2,
            borderColor : '#40B0FB',
        },
    sizeControl : {
        paddingTop :10,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    plusBtn : {
        backgroundColor : 'white',
        borderRadius : 18,
        justifyContent : 'center',
        alignItems : 'center',
        width: 36,
        height: 36,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    detail : {
        paddingTop : 30,
        display : 'flex',
        flexDirection : 'column',
    },
    detailTop : {
        display : "flex",
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    merk : {
        fontFamily : 'Metropolis-Medium',
        fontSize : 24
    },
    type : {
        color : '#9B9B9B',
        fontFamily : 'Metropolis-Regular',
        fontSize : 12,
    },
    detailPrice : {
        color : '#273AC7',
        fontFamily : 'Metropolis-Medium',
        fontSize : 24
    },
    desc : {
        paddingTop : 30,
        paddingBottom : 100,
        fontFamily : 'Metropolis-Light',
        alignItems :'center',
        lineHeight : 19,
        color : '#222222'
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
        justifyContent : 'center',
        alignItems : 'center',
        padding : 20,
    }
})

module.exports = style