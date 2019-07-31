'use strict';

import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, FlatList, TouchableHighlight, Image} from 'react-native';



export default class Results extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    static navigationOptions = {
        title: 'Results'
    }
    _keyExtractor = (item,index) => index;

    _renderItem = ({item}) => {
      
        return(
            <TouchableHighlight
                underlayColor='#dddddd'>
                <View>
                    <Text>{item.title}</Text>
                </View>
                </TouchableHighlight>
            
        )
    }
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