import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';


export default class SearchHeader extends React.PureComponent { 
  render(){
      return(
        <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={ styles.title}>Search</Text>
          <Ionicons name={'md-switch'} size={30} style={{ alignSelf: 'flex-end'}} color='#39AAEC' onPress={() => this.props.navigation.navigate({key: 'Filter', routeName: 'Filter'})}/>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#C9D8E7',
    padding: 20,
    paddingTop: (Platform.OS === 'ios' ? 30 :  StatusBar.currentHeight + 10),
  },
  title: {
    color: 'black',
    fontSize: 30,
    flex: 1, 
    alignSelf: 'center',
    justifyContent: 'center'
  },

});