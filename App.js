import React from 'react'
import Page from './components/Page'
// import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // componentDidMount(){
  //   Font.loadAsync({
  //     'Molle': require('assets/fonts/Molle-Italic.ttf')
  //   })
  // }

  return (
    <View style={styles.container}>
      <Page/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Molle-Italic'
  },
});

// const styles2 = StyleSheet.create({
//   container: {
//     fontFamily: 'Molle-Italic'
//   },
// });
