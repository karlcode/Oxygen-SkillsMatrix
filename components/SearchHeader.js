import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Alert, FlatList, Platform, StatusBar, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { SearchBar } from 'react-native-elements'

const KEYS_TO_FILTERS = ['name'];
export default class SearchHeader extends React.PureComponent { 
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    search2: SearchBar
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  
  render(){
    //const filteredData = this.props.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      return(
        <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        <Image style={{width: 50, height: 20}}
          source={require('../assets/DXC_Oxygen.png')}
        />
        <Ionicons name={'md-switch'} size={30} style={{ alignSelf: 'flex-end'}} color='#39AAEC' onPress={() => this.props.navigation.navigate({key: 'Filter', routeName: 'Filter'})}/>
        </View>
        <SearchBar
          lightTheme
          round
          onChangeText={e => {
            //this.props.searchTerm(e);
          }}
          onClearText={() => {
            //this.props.clearSearch();
          }}
          containerStyle={styles.searchBar}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchBar: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1, 
  },

});