import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width
const style = StyleSheet.create({
    content : {
        padding : 16,
    },
    color : {
        display : 'flex',
        flexDirection : "column",
        paddingBottom : 20
    },
    colorControl : {
        marginTop : 14,
        display : 'flex',
        flexDirection : 'row',
        backgroundColor : 'white',
        alignItems : 'center',
        padding: 25,
        marginRight : -16,
        marginLeft : -16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 1,
    },
    SizeControl : {
        marginTop : 14,
        display : 'flex',
        flexDirection : 'row',
        backgroundColor : 'white',
        alignItems : 'center',
        padding: 25,
        marginRight : -16,
        marginLeft : -16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 1,
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
        TextColor : {
            fontFamily : 'Metropolis-Medium',
            fontSize : 16,
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