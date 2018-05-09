import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../components/SearchHeader';
import SearchList from '../components/SearchList';
import MultiSelect from '../components/MultiSelect';
import { Button, ButtonGroup } from 'react-native-elements';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class FilterContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        selectedIndex: 1,
    };
    this.updateIndex = this.updateIndex.bind(this)
    
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render(){
    const buttons = ['P&T', 'Finance', 'BI']
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Business Area</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 30}}
            />
        <Text style={styles.title}>Locations</Text>            
        <MultiSelect data={this.props.locations} title="Locations" />
        <Text style={styles.title}>Skills</Text>        
        <MultiSelect data={this.props.skills} title="Skills"/>
        
          </View>
          <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Button
                title="Apply"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(29, 208, 93, 1)",
                    height: 45,
                    alignSelf: 'stretch'
                }}
                containerStyle={{ marginTop: 20 }}
                />
                </View>
                <View style={{flex: 1}}>
                <Button
                title="Cancel"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(255, 90, 95, 1)",
                    height: 45,
                }}
                containerStyle={{ marginTop: 20 }}
                />
                </View>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent:'flex-start',
    backgroundColor: '#F2F2F2',
  },
  contentContainer: {
    flex: 1 
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    paddingTop: 40,
    color: '#727272',
    fontSize: 16,
    alignSelf: 'center'
  },

});


mapStateToProps = (state, props) => {
  return {
    locations: state.dataReducer.locations,
    skills: state.dataReducer.skills,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
