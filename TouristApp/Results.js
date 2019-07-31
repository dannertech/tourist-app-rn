'use strict';

import React, {Component} from 'react';
import {View, TextInput, StyleSheet, FlatList, TouchableHighlight, Image} from 'react-native';
import { Card, CardItem, Header, Left, Body,  Right, Thumbnail, Text} from 'native-base';

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    }

    render(){
        const item = this.props.item;
        const price = item.price_formatted.split(' ')[0]
        return(
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={{ uri: item.img_url }} />
                    <Body>
                        <Text styles={styles.price}>{price}</Text>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: item.img_url }} style={{ height: 200, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        )
    }
}

export default class Results extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    static navigationOptions = {
        title: 'Results'
    }
    _onPressItem = (index) => {
        console.log("Pressed row: "+index);
    }
    _keyExtractor = (item,index) => index;

    _renderItem = ({item, index}) => (
        <ListItem
        item={item}
        index={index}
        onPressItem={this._onPressItem}
        />
    )
    render(){
        return(
            <FlatList
                data={this.props.navigation.state.params.listings}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 80, 
        height: 80,
        marginRight: 10,
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 20,
        color: '#48BBEC',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
})