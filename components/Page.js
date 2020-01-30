import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

class Page extends Component {
    componentDidMount() {
        Font.loadAsync({
          'Molle-cursive': require('../assets/fonts/Molle-Italic.ttf'),
        });
    }

    render() {
        
        return (
            <View>
                <Text style={{ fontFamily: 'Molle-cursive', color: 'white', fontSize: '75px'}}>Angelo</Text>
            </View>
        );
    }
}

export default Page;