import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';

export default class Search extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
