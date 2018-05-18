import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Alert, FlatList, Platform, StatusBar, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { SearchBar } from 'react-native-elements'


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";


class SearchHeader extends React.PureComponent { 
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
          <View style={{flex: 1}}>
          <Image  style={{ height: 40, width: 150,}}
            source={require('../assets/DXC_Oxygen.png')}
          />
          </View>
          <Ionicons name={'md-switch'} size={30} style={{ alignSelf: 'flex-end', paddingRight: 15}} color='#427CAC' onPress={() => this.props.navigation.navigate({key: 'Filter', routeName: 'Filter'})}/>
        </View>
        <SearchBar
          lightTheme
          round
          onChangeText={e => {
            this.props.searchTerm(e);
          }}
          onClearText={() => {
            this.props.clearSearch();
          }}
          showLoading
          inputStyle={{backgroundColor: '#EFF4F9'}}
          clearIcon={{ color: '#FF8888' }}
          platform="android"
          containerStyle={styles.searchBar}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Search' />
        </View>
    );
  }
}
mapStateToProps = (state, props) => {
  return {
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    elevation: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    paddingBottom: 5,
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
    borderTopColor: "transparent",
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1, 
    
  },

});