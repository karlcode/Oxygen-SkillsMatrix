import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListRow from './ListRow';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class SearchList extends React.Component {
  constructor(props){
    super(props)
  }
  _renderItem = ({ item }) => {
    return <ListRow item={item} navigation={this.props.navigation}/>;
  }
  handleRefresh = () => {
    this.props.getData();
  };
  render(){
    return (
      <View style={styles.container}>
      {this.props.users ? 
        <FlatList
        //data={[{Name: 'Karl Li', key: 1}, {Name: 'Panha Vong', key: 2},{Name: 'William Wrigley', key: 3}, {Name: 'Kelly Sharma', key: 4},{Name: 'Tony Stark', key: 5}, {Name: 'Warren Vonghack', key: 6},{Name: 'Hulk', key: 7}, {Name: 'Captain America', key: 8}]}
        data={this.props.cleared ? this.props.users : this.props.filteredData}
        renderItem={this._renderItem}
        //extraData={this.state}
        keyExtractor={(item, index) => item.Id}
        //ListEmptyComponent={this.noItemDisplay}
        //ItemSeparatorComponent={this.renderSeparator}
        onRefresh={this.handleRefresh}
        removeClippedSubviews={false}
        refreshing={this.props.refreshing}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />: null }
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: 'white',
    fontSize: 30
  },

});

mapStateToProps = (state, props) => {
  return {
    ...props.navigation,
    showFilter: state.dataReducer.showFilter,
    users: state.dataReducer.users,
    cleared: state.dataReducer.cleared,
    filteredData: state.dataReducer.filteredData,
    refreshing: state.dataReducer.refreshing
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);