import React from 'react'
import Page from './components/Page'
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
    backgroundColor: '#FADAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
