import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchHeader extends React.PureComponent { 
  render(){
      return(
        <View style={styles.container}>
        <Ionicons name={'md-more'} size={20} style={{ alignSelf: 'flex-end'}} color='transparent'/>
        <Text style={ styles.title}>Search</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    elevation: 20,
    backgroundColor: '#2D3037',
    padding: 20,
    paddingTop: (Platform.OS === 'ios' ? 20 :  StatusBar.currentHeight),
    borderBottomRightRadius: 100
  },
  title: {
    color: 'white',
    fontSize: 30
  },

});