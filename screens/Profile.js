import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';

export default class Profile extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
      <Text>{params.Name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#FAFAFA'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
