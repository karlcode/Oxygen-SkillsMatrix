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

  }
  componentDidMount(){
    this.props.getData()
  }
  render(){
    const { users } = this.props;
    return (
      <View style={styles.container}>
        <SearchHeader navigation={this.props.navigation}/>
        {users ? <SearchList data={users} navigation={this.props.navigation}/> : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

});


mapStateToProps = (state, props) => {
  return {
    users: state.dataReducer.users,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
