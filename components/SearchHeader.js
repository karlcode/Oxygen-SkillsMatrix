import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import SearchForm from './SearchForm';
export default class SearchHeader extends React.PureComponent { 
  constructor(props){
    super(props);

    this.state = {
      isCollapsed: true
    };
  }
  render(){
      return(
        <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={ styles.title}>Search</Text>
          <Ionicons name={'md-switch'} size={20} style={{ alignSelf: 'center'}} color='white' onPress={()=> this.setState({isCollapsed: !this.state.isCollapsed})}/>
        </View>
        <Collapsible collapsed={this.state.isCollapsed}>
        <SearchForm/>
        </Collapsible>
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
  },
  title: {
    color: 'white',
    fontSize: 30,
    flex: 1
  },

});