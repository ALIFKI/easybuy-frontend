import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
// import image from '../../assets/image/banner2.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/ButtonComponent';
import {API_URL} from '@env';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cart';

class ProductScreen extends Component {
  state = {
    selected_color: '',
    selected_size: '',
  };
  handleAddToCart = () => {
    const token = this.props.user.auth.token;
    const product_id = this.props.route.params.id;
    const data = {
      selected_color: this.state.selected_color,
      selected_size: this.state.selected_size,
      qty: 1,
    };
    this.props
      .addToCart(token, product_id, data)
      .then((res) => {
        console.log(res);
        Alert.alert('Add Item To Cart', 'Success', [{text: 'ok'}]);
      })
      .catch((err) => {
        console.log(err.response);
        Alert.alert('Add Item To Cart', err.response, [{text: 'ok'}]);
      });
  };
  componentDidMount() {
    this.listSize = this.props.route.params.size.split('|');
    this.listColor = this.props.route.params.color.split('|');
    this.setState({
      selected_size: this.listSize[0],
      selected_color: this.listColor[0],
    });
  }
  render() {
    const {
      id,
      brand,
      category,
      color,
      description,
      image,
      price,
    } = this.props.route.params;
    let listColor = color.split('|') || color;
    return (
      <>
        <ScrollView>
          <View style={style.bannerContent}>
            <Image
              source={{uri: API_URL + 'img/' + image}}
              style={style.image}
            />
          </View>
          <View style={style.content}>
            <View style={style.header}>
              <View style={style.color}>
                <Text style={style.textColor}>Color</Text>
                <View style={style.colorControl}>
                  {listColor.map((colorItem) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          selected_color: colorItem,
                        })
                      }
                      style={[
                        style.colorPick,
                        {backgroundColor: `${colorItem}`},
                      ]}>
                      {colorItem == this.state.selected_color ? (
                        <View style={style.selected} />
                      ) : null}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={style.size}>
                <Text style={style.textSize}>Size</Text>
                <View style={style.sizeControl}>
                  <TouchableOpacity style={style.plusBtn}>
                    <IonIcon name={'remove-outline'} size={24} />
                  </TouchableOpacity>
                  <TextInput
                    style={{width: 40, textAlign: 'center'}}
                    defaultValue={`${this.state.selected_size}`}
                    value={`${this.state.selected_size}`}
                    onChangeText={(val) => this.setState({selected_size: val})}
                  />
                  <TouchableOpacity style={style.plusBtn}>
                    <IonIcon name={'add-outline'} size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={style.detail}>
              <View style={style.detailTop}>
                <View>
                  <Text style={style.merk}>{brand}</Text>
                  <Text style={style.type}>{category}</Text>
                </View>
                <Text style={style.detailPrice}>${price}</Text>
              </View>
              <View>
                <Text style={style.desc}>{description}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={style.bottomContent}>
          <Button text={'ADD TO CART'} onPress={this.handleAddToCart} />
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth,
  cart: state.cart,
});

const mapDispatchToProp = {addToCart};
export default connect(mapStateToProps, mapDispatchToProp)(ProductScreen);
