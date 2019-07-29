'use strict';

import {Text, View, StyleSheet, TextInput, Button, ActivityIndicator, Image} from 'react-native';
import React, {Component} from 'react';

export default class Searchpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchString: 'london'
        }
    }
_onSearchTextChanged = (event) => {
    console.log('_onSearchTextChanged');
    this.setState({searchString: event.nativeEvent.text});
    console.log('Current: ' + this.state.searchString + ',Next: ' + event.nativeEvent.text);
}

    static navigationOptions = {
        title: "Search"
    }
    render(){
        console.log('Searchpage.render')
        return(
            <View style={styles.container}>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name or postcode.</Text>
                <View style={styles.flowRight}>
                    <TextInput placeholder='Search via name or postcode' style={styles.searchInput} value={this.state.searchString} onChange={this._onSearchTextChanged} />
                    <Button onPress={() => {}} color='#48BBEC' title='Go'/>
                </View>
                <Image source={require('./Resources/house.png')} style={styles.image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
},
container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
},
flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
},
searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
},
image: {
    width: 217,
    height: 138
}

})