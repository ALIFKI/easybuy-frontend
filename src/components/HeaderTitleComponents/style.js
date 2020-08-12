import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    headerTitle : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : 10
    },
    titleView : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'flex-start'
    },
    new : {
        fontSize: 24,
        fontFamily : 'Metropolis-Bold',
        color : '#222222'
    },
    subtitle : {
        fontFamily : 'Metropolis-Regular',
        fontSize : 16,
        color : '#ACACAC'
    },
    viewAll : {
        fontFamily : 'Metropolis-Regular',
        fontSize : 14
    }
})

module.exports = style
