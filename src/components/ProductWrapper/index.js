import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import style from './style'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'
import StartComponet from '../../components/StarComponent'

export class ProductWrapper extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <View style={style.productCardWrapper}>
                    <FlatList 
                        style={{marginBottom : 0}}
                        horizontal
                        data={this.props.data}
                        renderItem={({ item: rowData }) => {
                        return (
                                <TouchableOpacity
                                    style={[{
                                        marginLeft : 8,
                                        marginRight : 8
                                    },style.productCard]}
                                >
                                    <View style={style.Badge}>
                                        <Text style={style.badgeText}>
                                            New
                                        </Text>
                                    </View>
                                    <Image source={{uri : rowData.imageUrl}} style={{height : 184,width : 148,borderRadius : 5}}/>
                                    <View style={style.DetailProduct}>
                                        <View style={style.start}>
                                            <StartComponet/>
                                        </View>
                                        <Text style={style.styles}>
                                            Mango boy
                                        </Text>
                                        <Text style={style.model}>
                                            Blouse
                                        </Text>
                                        <Text style={style.price}>
                                            $30
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                </View>
            </>
        )
    }
}

export default ProductWrapper
