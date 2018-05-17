import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  FlatList,
  SectionList,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import MultiSelect from "../components/MultiSelect";
import OptionsContainer from "../containers/OptionsContainer";
import { Button, ButtonGroup } from "react-native-elements";
import { Select, Option } from "react-native-select-lists";
import { Avatar, ListItem, Slider, Rating } from "react-native-elements";
import Modal from "react-native-modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 6,
      modalVisible: false
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  notesData = this.props.skillgroups.map(key => {
    return { header: key.Name, id: key.Id, data: key.SkillSet.results };
  });
  _renderItem = ({ item, index, section }) => {
    if (section.id == item.SkillGroupId) {
      return (
        <View>
          <TouchableOpacity>
            <ListItem
              key={index}
              title={item.Name}
              onPress={() => {
                this.setModalVisible(true);
              }}
              containerStyle={{
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 2.5,
                marginBottom: 2.5
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };
  mySwitchFunction = (param) => {
    switch (param) {
       case 'Skills':
          return (<SectionList
            //data={this.props.skillgroups}
            sections={this.notesData}
            keyExtractor={(item, index) => item.Id}
            renderItem={this._renderItem}
            renderSectionHeader={({ section }) => (
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 2.5,
                  marginBottom: 2.5
                }}
              >
                {section.header}
              </Text>
            )}
          />);
      case 'Team':
            return null
      case 'Position':
            return null      
      case 'Clearance':
            return <Text>You do not have permission to edit this field</Text>         
      case 'Banding':
            return <Text>You do not have permission to edit this field</Text>          
      case 'Location':
            return null      
      case 'Nationality':
            return null      
      case 'Contact Number':
            return null      
      case 'Email':
            return <Text>You do not have permission to edit this field</Text>     
      default: 
            return <Text>No Data to display</Text>
    }
 }
  render() {
    const { navigation } = this.props;
    const { title } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.modalVisible}
          backdropColor={"rgba(0,0,0,0.2)"}
          backdropOpacity={1}
          onBackdropPress={() => {
            this.setModalVisible(false);
          }}
          animationInTiming={200}
          animationOutTiming={200}
          backdropTransitionInTiming={200}
          backdropTransitionOutTiming={200}
        >
          <View style={styles.modalContent}>
            <Text>Value: {this.state.value}</Text>
            <View
              style={{
                flex: 1,
                alignItems: "stretch",
                justifyContent: "center"
              }}
            >
              {/*<Slider
                value={this.state.value}
                minimumValue={0}
                maximumValue={10}
                step={2}
                onValueChange={value => this.setState({ value })}
              />*/}
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                readonly
                imageSize={40}
                onFinishRating={()=>alert("Done")}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <Button
              title="Cancel"
              color="#16c5cc"
              buttonStyle={{
                backgroundColor: "blue"
              }}
              onPress={() => {
                this.setModalVisible(false);
              }}
            />
          </View>
        </Modal>
        <View style={styles.modal}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignSelf: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                Edit {title}
              </Text>
            </View>
            <Button
              title="Cancel"
              color="#16c5cc"
              buttonStyle={{
                backgroundColor: "transparent"
              }}
              onPress={() => navigation.goBack()}
            />
          </View>
          {this.mySwitchFunction(title)}
        </View>

        {/*<View style={{ justifyContent: "flex-end" }}>
          <Button
            buttonStyle={{
              backgroundColor: "#2B7D2B",
              height: 60,
              alignSelf: "stretch"
            }}
            containerViewStyle={{ width: "100%", marginLeft: 0 }}
            title="Submit"
            onPress={() => {
              navigation.goBack();
            }}
          />
          </View>*/}
      </View>
    );
  }
}

mapStateToProps = (state, props) => {
  return {
    skillgroups: state.dataReducer.skillgroups
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
    //paddingBottom: 6,
    //paddingLeft: 15,
    //paddingRight: 15,
    //paddingTop: 6
  },
  modal: {
    height: "80%",
    width: "100%",
    backgroundColor: "#EFF4F9",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    height: 200,
    //alignItems: "center",
    borderRadius: 8,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  title: {
    color: "white",
    fontSize: 16
  }
});
