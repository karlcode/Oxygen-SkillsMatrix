import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../components/SearchHeader';
import SearchList from '../components/SearchList';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class SearchContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }
  render(){
    return (
      <View style={styles.container}>
        <SearchHeader/>
        <SearchList />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});


mapStateToProps = (state, props) => {
  return {
    //loading: state.dataReducer.loading,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
