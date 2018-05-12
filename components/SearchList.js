import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListRow from './ListRow';

const SearchList = (props) => {
  _renderItem = ({ item }) => {
    return <ListRow item={item} navigation={props.navigation}/>;
  }
  return (
    <View style={styles.container}>
    {props.data ? 
      <FlatList
      //data={[{Name: 'Karl Li', key: 1}, {Name: 'Panha Vong', key: 2},{Name: 'William Wrigley', key: 3}, {Name: 'Kelly Sharma', key: 4},{Name: 'Tony Stark', key: 5}, {Name: 'Warren Vonghack', key: 6},{Name: 'Hulk', key: 7}, {Name: 'Captain America', key: 8}]}
      data={props.data}
      renderItem={this._renderItem}
      horizontal={false}
      numColumns={2}
      //extraData={this.state}
      keyExtractor={(item, index) => item.id}
      //ListEmptyComponent={this.noItemDisplay}
      //ItemSeparatorComponent={this.renderSeparator}
      //onRefresh={this.handleRefresh}
      removeClippedSubviews={false}
      //refreshing={this.props.refreshing}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
    />: null }
        
    </View>
  );
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

export default SearchList;