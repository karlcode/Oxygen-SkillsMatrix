import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import MultiSelect from '../components/MultiSelect';
import { Button, ButtonGroup } from 'react-native-elements';


export default class Options extends React.Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Optrions</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#F2F2F2',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
});
