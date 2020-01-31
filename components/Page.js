import React, { Component, State } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import MOLLE from '../assets/fonts/Molle-Italic.ttf'

class Page extends Component {
    // s 
    componentDidMount = async () => {
        Font.loadAsync({
          'Molle-cursive': {MOLLE},
        });
    }
    render() {
        // const { pageChange } = this.state
        let thePage = <Text style={styles.text}>Angelo</Text>
        return (
            <View>
                {thePage}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Molle-cursive', 
        color: 'white', 
        fontSize: 75
    },
  });

export default Page;