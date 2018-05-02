import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListRow from './ListRow';
const SearchList = () => {

  _renderItem = ({ item }) => {
    return <ListRow item={item} />;
  }
  return (
    <View style={styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'}, {key: 'j'},{key: 'k'}, {key: 'l'}]}
          renderItem={this._renderItem}
          horizontal={false}
          numColumns={2}
          //extraData={this.state}
          //keyExtractor={(item, index) => item.id}
          //ListEmptyComponent={this.noItemDisplay}
          //ItemSeparatorComponent={this.renderSeparator}
          //onRefresh={this.handleRefresh}
          removeClippedSubviews={false}
          //refreshing={this.props.refreshing}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
        />
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