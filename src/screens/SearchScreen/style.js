import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    header : {
        padding : 16,
        paddingLeft : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        
        elevation: 20,
        display : 'flex',
        flexDirection : 'column'
    },
    topNav : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center'
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
    //separated
    mainContent : {
        padding : 16
    },
    popular : {
        fontFamily : 'Metropolis-bold',
        fontSize : 16,
        color : '#222'
    },
    tooltip : {
        paddingTop : 12,
        display : 'flex',
        flexDirection : 'row'
    },
    badge : {
        borderRadius : 100,
        borderWidth : 1,
        borderColor : '#273AC7'
    },
    badgeTxt : {
        padding : 5,
        paddingLeft : 10,
        paddingRight : 10,
        color : '#273AC7'
    }
})

module.exports = style