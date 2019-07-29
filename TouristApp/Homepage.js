'use strict';


import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Homepage extends Component {
    static navigationOptions = {
        title: "Home"
    };
    render(){
        return(
            <View>
                <Text style={styles.description}>Welcome to the Homepage, Start Searching for Houses to Buy!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65
    }
})