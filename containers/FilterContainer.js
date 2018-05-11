import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  FlatList,
  Platform,
  StatusBar
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchHeader from "../components/SearchHeader";
import SearchList from "../components/SearchList";
import MultiSelect from "../components/MultiSelect";
import { Button, ButtonGroup } from "react-native-elements";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = ["P&T", "Finance", "BI"];
    const { selectedIndex } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Business Area</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 30 }}
          />

          <Text style={styles.title}>Locations</Text>
          <MultiSelect data={this.props.locations} title="Locations" />

          <Text style={styles.title}>Skills</Text>
          <MultiSelect data={this.props.skills} title="Skills" />

          <Text style={styles.title}>Security Clearance</Text>
          <MultiSelect data={this.props.skills} title="Skills" />

          <Text style={styles.title}>Banding Level</Text>
          <MultiSelect data={this.props.skills} title="Skills" />

          <Text style={styles.title}>AU/NZ Citizenship</Text>
          
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button
              onPress={this.props.applyFilter}
              title="Apply"
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "#40cca2",
                height: 60,
                alignSelf: "stretch"
              }}
              
              containerViewStyle={{width: '100%', marginLeft: 0}}
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
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2"
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  title: {
    paddingTop: 30,
    color: "#727272",
    fontSize: 20,
    alignSelf: "center"
  }
});

mapStateToProps = (state, props) => {
  return {
    locations: state.dataReducer.locations,
    skills: state.dataReducer.skills
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
