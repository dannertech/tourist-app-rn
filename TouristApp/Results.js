'use strict';

import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, FlatList, TouchableHighlight, Image} from 'react-native';

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    }

    render(){
        const item = this.props.item;
        const price = item.price_formatted.split(' ')[0]
        return(
            <TouchableHighlight
            onPress={this._onPress}
            underlayColor='#dddddd' >
            <View>
            <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            </View>
            </View>
            <View style={styles.separator} />
            </View>
            </TouchableHighlight>
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