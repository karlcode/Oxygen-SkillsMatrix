import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../components/SearchHeader';
import SearchList from '../components/SearchList';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class SearchContainer extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.getData()
    this.props.getSkills()
    this.props.getProfile()
    this.props.getUserSkills()
  }
  render(){
    const { users, cleared, filteredData } = this.props;
    return (
      <View style={styles.container}>
        {/*<SearchHeader data={users} navigation={this.props.navigation}/>*/}
        {this.props.showFilter ? <Button onPress={this.props.clearFilter} title="Clear filter"/> : null}
        {users ? <SearchList data={users} cleared={cleared} filteredData={filteredData} navigation={this.props.navigation}/> : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEF0F2"
  },

});


mapStateToProps = (state, props) => {
  return {
    showFilter: state.dataReducer.showFilter,
    users: state.dataReducer.users,
    cleared: state.dataReducer.cleared,
    filteredData: state.dataReducer.filteredData,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
