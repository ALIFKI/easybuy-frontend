import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/FontAwesome';
import style from './style';

class StartComponet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let star = [];
    for (let i = 0; i < this.props.star; i++) {
      star.push(i);
    }
    return (
      <View style={style.content}>
        {star.map((row, index) => {
          return (
            <IonIcon
              key={index}
              name={'star-o'}
              size={12}
              color={'#9B9B9B'}
              style={{marginLeft: 2}}
            />
          );
        })}
        <Text style={style.count}>({this.props.star})</Text>
      </View>
    );
  }
}

export default StartComponet;
