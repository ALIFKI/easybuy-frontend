import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import style from './style';
import image from '../../assets/image/banner.png';
import {Card} from 'galio-framework';
import ProductWrapper from '../../components/ProductWrapper';
import HeaderTitleComponents from '../../components/HeaderTitleComponents';
import {connect} from 'react-redux';
import {getProduct} from '../../redux/actions/product';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      newestProduct: [],
      popularProduct: [],
      page: 1,
      search: '',
      category: '',
      size: '',
      color: '',
      sort: '',
    };
  }
  getNewestProduct = async () => {
    await this.setState({
      sort: 'newest',
    });
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyOSwibmFtZSI6ImFiaSIsImVtYWlsIjoiYWJpLnZhcmRoYW5hQG91dGxvb2suY29tIiwiYmlydGhkYXkiOiIyMDAyLTA1LTIwVDE3OjAwOjAwLjAwMFoiLCJpbWFnZSI6ImRlZmF1bHQuanBnIiwiaXNfYWN0aXZlIjoxLCJjcmVhdGVkX2F0IjoiMjAyMC0wOC0xMVQxMzo0MDo1OC4wMDBaIiwidXBkYXRlZF9hdCI6bnVsbH0sImlhdCI6MTU5NzIyOTEwMiwiZXhwIjoxNTk3MzE1NTAyfQ.IKqEmbxILtU-egQ8gT71jN2Ne2WjWkVXPfsmc82i9mA';
    const {page, search, category, size, color, sort} = this.state;
    this.props
      .getProduct(token, page, search, category, size, color, sort)
      .then((res) => {
        this.setState({
          newestProduct: res.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  getPopularProduct = async () => {
    await this.setState({
      sort: 'popular',
    });
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyOSwibmFtZSI6ImFiaSIsImVtYWlsIjoiYWJpLnZhcmRoYW5hQG91dGxvb2suY29tIiwiYmlydGhkYXkiOiIyMDAyLTA1LTIwVDE3OjAwOjAwLjAwMFoiLCJpbWFnZSI6ImRlZmF1bHQuanBnIiwiaXNfYWN0aXZlIjoxLCJjcmVhdGVkX2F0IjoiMjAyMC0wOC0xMVQxMzo0MDo1OC4wMDBaIiwidXBkYXRlZF9hdCI6bnVsbH0sImlhdCI6MTU5NzIyOTEwMiwiZXhwIjoxNTk3MzE1NTAyfQ.IKqEmbxILtU-egQ8gT71jN2Ne2WjWkVXPfsmc82i9mA';
    const {page, search, category, size, color, sort} = this.state;
    this.props
      .getProduct(token, page, search, category, size, color, sort)
      .then((res) => {
        this.setState({
          popularProduct: res.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  componentDidMount = async () => {
    await this.getNewestProduct();
    await this.getPopularProduct();
  };
  render() {
    return (
      <ScrollView>
        {/* <StatusBar backgroundColor={'transparent'}/> */}
        <View style={style.bannerContent}>
          <Image source={image} />
          <Text
            style={[style.title]}
            onPress={() => {
              console.log(this.props.user.auth.token);
            }}>
            Street Clothes
          </Text>
        </View>
        <View style={style.content}>
          <HeaderTitleComponents
            title={'New'}
            subtitle={"you've never seen it before"}
            actionTitle={'View all'}
            actionPress={() => {
              console.log('e');
            }}
          />
          <ProductWrapper data={this.state.newestProduct} />
          <HeaderTitleComponents
            title={'Popular'}
            subtitle={"you've never seen it before"}
            actionTitle={'View all'}
            actionPress={() => {
              console.log('e');
            }}
          />
          <ProductWrapper data={this.state.popularProduct} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  product: state.product,
});

const mapDispatchToProp = {getProduct};

export default connect(mapStateToProps, mapDispatchToProp)(HomeScreen);
