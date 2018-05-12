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
  StatusBar,
  Picker
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
      location: "Sydney",
      clearance: "Positive Vetting",
      banding: "C1",
      citizenship: "AU",
      area: "All",
      position: "Technical Consultant"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Position</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.position}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({position: itemValue})}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Technical Consultant" value="Technical Consultant" />
            <Picker.Item label="Lead Consultant" value="Lead Consultant" />
            <Picker.Item label="Business Consultant" value="Business Consultant" />
            <Picker.Item label="Managing Consultant" value="Managing Consultant" />
            <Picker.Item label="Practice Manager" value="Practice Manager" />
            <Picker.Item label="Business Manager" value="Business Manager" />
            <Picker.Item label="HR Manager" value="HR Manager" />
          </Picker>
          </View>

          <Text style={styles.title}>Business Area</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.area}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({area: itemValue})}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="P&T" value="P&T" />
            <Picker.Item label="BI" value="BI" />
            <Picker.Item label="Basis" value="js" />
            <Picker.Item label="Business One" value="js" />
            <Picker.Item label="Finance" value="js" />
            <Picker.Item label="HR" value="js" />
            <Picker.Item label="Supply Chain" value="js" />
          </Picker>
          </View>
          
          <Text style={styles.title}>Locations</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.location}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Sydney" value="Sydney" />
            <Picker.Item label="Melbourne" value="Melbourne" />
            <Picker.Item label="Auckland" value="Auckland" />
            <Picker.Item label="Brisbane" value="Brisbane" />
            <Picker.Item label="Christchurch" value="Christchurch" />
          </Picker>
          </View>

          <Text style={styles.title}>Skills</Text>
          <MultiSelect data={this.props.skills} title="Skills" />

          <Text style={styles.title}>Security Clearance</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.clearance}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({clearance: itemValue})}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Positive Vetting" value="Positive Vetting" />
            <Picker.Item label="Negative Vetting L1" value="Negative Vetting L1" />
            <Picker.Item label="Negative Vetting L2" value="Negative Vetting L2" />
            <Picker.Item label="Baseline Vetting" value="Baseline Vetting" />
            <Picker.Item label="None" value="None" />
          </Picker>
          </View>

          <Text style={styles.title}>Banding Level</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.banding}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({banding: itemValue})}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="C1" value="C1" />
            <Picker.Item label="C2" value="C2" />
            <Picker.Item label="C3" value="C3" />
            <Picker.Item label="C4" value="C4" />
            <Picker.Item label="C5" value="C5" />
            <Picker.Item label="C6" value="C6" />
            <Picker.Item label="C7" value="C7" />
            <Picker.Item label="C8" value="C8" />
          </Picker>
          </View>

          <Text style={styles.title}>AU/NZ Citizenship</Text>
          <View style={{backgroundColor: '#FFF'}}>
          <Picker
            selectedValue={this.state.citizenship}
            style={{ height: 50, width: '100%', borderRadius: 5, elevation: 1}}
            onValueChange={(itemValue, itemIndex) => this.setState({citizenship: itemValue})}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="AU" value="AU" />
            <Picker.Item label="NZ" value="NZ" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
          </View>

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
