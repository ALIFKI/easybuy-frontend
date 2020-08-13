import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StatusBar} from 'react-native';
import style from './style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HeaderTitleComponents from '../../components/HeaderTitleComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../../assets/image/banner.png';
import StartComponet from '../../components/StarComponent';
import CardShop from '../../components/CardShopComponent';
import ModalSort from '../../components/ModalSort';
import FilterBtn from '../../components/FilterBtn';
import {API_URL} from '@env';
import Axios from 'axios';

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalSort: false,
      sort: '',
      search: '',
      color: '',
      size: '',
      category: '',
      page: 1,
      data: [],
      soryBy: 'Popular',
    };
  }
  componentDidMount() {
    this._handleGetData();
    console.log('res');
  }
  UNSAFE_componentWillMount() {
    console.log('res');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // this._handleGetData()
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    // this._handleGetData()
    // if(this.props.route.params.data !== undefined){
    //     this._handleGetData()
    // }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.route.params !== undefined) {
      return {
        ...state,
        ...props.route.params.data,
      };
    } else {
      return null;
    }
  }
  _handleGetData = () => {
    console.log('handle');
    Axios({
      method: 'GET',
      url: `${API_URL}product?sort=${this.state.sort}&search=${this.state.search}&color=${this.state.color}&size=${this.state.size}&category=${this.state.category}&limit&page=${this.state.page}`,
    })
      .then((res) => {
        // console.log(res)
        this.setState({
          data: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  _handleGetPaginate = () => {
    console.log('pagg');
    Axios({
      method: 'GET',
      url: `${API_URL}product?sort=${this.state.sort}&search=${this.state.search}&color=${this.state.color}&size=${this.state.size}&category=${this.state.category}&limit&page=${this.state.page}`,
    })
      .then((res) => {
        // console.log(res)
        var newArr = this.state.data;
        for (let index = 0; index < res.data.data.length; index++) {
          newArr.push(res.data.data[index]);
        }
        this.setState({
          data: newArr,
          // page : parseInt(res.value.data.pageInfo.current_page)
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  _handleSort = () => (data) => {
    console.log(data);
    this.setState(
      {
        sort: data.value,
        soryBy: data.name,
        ModalSort: false,
      },
      () => {
        this._handleGetData();
      },
    );
  };
  handlePagination = () => {
    this.setState({page: this.state.page + 1}, this._handleGetPaginate);
  };
  render() {
    const isCloseToBottom = ({
      layoutMeasurement,
      contentOffset,
      contentSize,
    }) => {
      const paddingToBottom = 0;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };
    return (
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            this.handlePagination();
          }
        }}>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <View style={style.header}>
          <View style={style.topNav}>
            <IonIcon name={'chevron-back-outline'} size={25} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              <IonIcon name={'search-outline'} size={25} />
            </TouchableOpacity>
          </View>
          <HeaderTitleComponents title={'Women Top'} />
          <View style={style.filter}>
            <FilterBtn
              text={'Filter'}
              icon={'filter-outline'}
              onPress={() => {
                this.props.navigation.navigate('Filter');
              }}
            />
            <FilterBtn
              text={this.state.soryBy}
              icon={'swap-vertical-outline'}
              onPress={() => {
                this.setState({ModalSort: true});
              }}
            />
            <FilterBtn
              text={''}
              icon={'filter-outline'}
              onPress={this._handleGetData}
            />
          </View>
        </View>
        <View style={style.mainContent}>
          {this.state.data.map((row, index) => {
            return <CardShop key={index} data={row}></CardShop>;
          })}
        </View>
        {/* Components */}
        <ModalSort
          visible={this.state.ModalSort}
          onClose={() => {
            this.setState({
              ModalSort: false,
            });
          }}
          sort={this._handleSort}
        />
      </ScrollView>
    );
  }
}

export default ShopScreen;
