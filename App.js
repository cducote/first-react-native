import React from 'react'
import Page from './components/Page'
// import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Page/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(251,131,250)',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'Molle-Italic'
  },
});

// const styles2 = StyleSheet.create({
//   container: {
//     fontFamily: 'Molle-Italic'
//   },
// });
