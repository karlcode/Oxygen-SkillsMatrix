import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../components/SearchHeader';
import SearchList from '../components/SearchList';
import { Button, ButtonGroup } from "react-native-elements";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class OptionsContainer extends React.Component {
  constructor(props){
    super(props);

  }
  
  render(){
    const { navigation } = this.props;
    return (
    <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
      >
    <View
        style={{ height: "60%", width: "100%", backgroundColor: "#E8E4D9" }}
      >
        <Button
          style={{ position: "absolute", top: 5, right: 5 }}
          title="Cancel"
          onPress={() => navigation.goBack()}
        />
        <Text>Testing a modal with transparent background</Text>
      </View>
      <View style={{justifyContent: "flex-end"}} >
        <Button
          buttonStyle={{
            backgroundColor: "#40cca2",
            height: 60,
            alignSelf: "stretch"
          }}
          containerViewStyle={{width: '100%', marginLeft: 0}}
          title="Submit"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
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
    showFilter: state.dataReducer.showFilter,
    users: state.dataReducer.users,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
