import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MultiSelect from 'react-native-multiple-select';

export default class SearchForm extends React.PureComponent { 
  constructor(props){
    super(props);

    this.state = {
        selectedIndex: 1,
        selectedItems: []
    };
    this.updateIndex = this.updateIndex.bind(this)
    
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  render(){
      return(
        <View style={styles.container}>
            
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