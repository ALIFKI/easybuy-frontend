import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import style from './style';
import HeaderTitleComponents from '../../components/HeaderTitleComponents';
import StartComponet from '../../components/StarComponent';
import * as RootNavigation from '../../routes/RootNav';
import {API_URL} from '@env';

class ProductWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let maxlimit = 17;
    return (
      <>
        <View style={style.productCardWrapper}>
          <FlatList
            style={{marginBottom: 0}}
            horizontal
            data={this.props.data}
            renderItem={({item: rowData}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    RootNavigation.navigate('Product', {name: rowData.name});
                  }}
                  style={[
                    {
                      marginLeft: 8,
                      marginRight: 8,
                    },
                    style.productCard,
                  ]}>
                  <View style={style.Badge}>
                    <Text style={style.badgeText}>New</Text>
                  </View>
                  <Image
                    source={{uri: API_URL + 'img/' + rowData.image}}
                    style={{height: 184, width: 148, borderRadius: 5}}
                  />
                  <View style={style.DetailProduct}>
                    <View style={style.start}>
                      <StartComponet star={rowData.rating} />
                    </View>
                    <Text style={style.styles}>
                      {rowData.brand.length}
                      {rowData.brand.length > maxlimit
                        ? rowData.brand.substring(0, maxlimit - 3) + '...'
                        : rowData.brand}
                    </Text>
                    <Text style={style.model}>
                      {rowData.name.length > maxlimit
                        ? rowData.name.substring(0, maxlimit - 3) + '...'
                        : rowData.name}
                    </Text>
                    <Text style={style.price}>${rowData.price}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    );
  }
}

export default ProductWrapper;
