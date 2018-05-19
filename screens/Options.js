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

import StarRating from 'react-native-star-rating';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 6,
      modalVisible: false, 
      modalName: '',
      skillRank: '',
      rankId: 0,
      skillId: '',
      isUpdate: true
    };
  }
  notesData = this.props.skillgroups.map(key => {
    return { header: key.Name, id: key.Id, data: key.SkillSet.results };
  });

  setModalVisible(visible, name, rank, index, id, isUpdate) {
    this.setState({ modalVisible: visible, modalName: name, skillRank: rank, rankId: index, skillId: id, isUpdate: isUpdate});
  }

  _onFinishRating = (rating) => {
    this.setState({ rankId: rating });
  }

  _renderItem = ({ item, index, section }) => {
    let found = this.props.userSkills.some(e => e.SkillId === item.Id)
    let filtered = this.props.userSkills.filter(e => e.SkillId === item.Id)
    if (section.id == item.SkillGroupId) { //constructing list of categories and respective items
      if (found && filtered[0]) { 
      return (
        <View>
          <TouchableOpacity>
            <ListItem
              key={item.Id}
              title={`${item.Name} - ${filtered[0].SkillRank.Name}`}
              onPress={() => 
                this.setModalVisible(true, item.Name, filtered[0].SkillRank.Name, filtered[0].SkillRankId, item.Id, found)
                //alert(item.Id + filtered[0].SkillRankId + filtered[0].SkillRank.Name)
              }
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
      return (
        <View>
          <TouchableOpacity>
            <ListItem
              key={item.Id}
              title={item.Name}
              onPress={() => 
                this.setModalVisible(true, item.Name, null, null, item.Id, found)
              }
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
      default: 
            return <Text>You do not have permission to edit this field</Text>  
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
                                                <View style={{ flexDirection: "row" }}>
                                                  <View style={{ flex: 1}}>
                                                  <Text>{this.state.modalName}</Text>
                                                  
                                                  </View>
                                                  <Button
                                                    title="Cancel"
                                                    color="#16c5cc"
                                                    buttonStyle={{
                                                      backgroundColor: "transparent",
                                                      alignSelf: 'flex-start'
                                                    }}
                                                    onPress={() => {
                                                      this.setModalVisible(false);
                                                    }}
                                                  />
                                                </View>
                                                
                                                <View
                                                  style={{
                                                    flex: 1,
                                                    alignItems: "stretch",
                                                    justifyContent: "center"
                                                  }}
                                                >
                                                  <StarRating
                                                    disabled={false}
                                                    maxStars={4}
                                                    rating={Math.round(this.state.rankId)}
                                                    selectedStar={this._onFinishRating}
                                                  />
                                                  {/*<Rating
                                                    showRating
                                                    type="star"
                                                    ratingCount={4}
                                                    fractions={0}
                                                    startingValue={Math.round(this.state.rankId)}
                                                    imageSize={80}
                                                    onFinishRating={this._onFinishRating}
                                                    style={{ paddingVertical: 40 }}
                                                  />*/}
                                                </View>
                                           
                                                <Button
                                                  title="Submit"
                                                  color="#fff"
                                                  buttonStyle={{
                                                    backgroundColor: "#ABE2AB"
                                                  }}
                                                  onPress={this.state.isUpdate ? (() => {
                                                    this.setModalVisible(false)
                                                    this.props.updateSkill( this.state.skillId, this.state.rankId , this.props.token)
                                                  }) : (() => {
                                                    this.setModalVisible(false)
                                                    this.props.createSkill( this.state.skillId, this.state.rankId , this.props.token)
                                                  })}
                                                />
                                                <Button
                                                  title="Delete"
                                                  color="#fff"
                                                  buttonStyle={{
                                                    backgroundColor: "#FF8888"
                                                  }}
                                                  onPress={() => {
                                                    this.setModalVisible(false)
                                                    this.props.deleteSkill( this.state.skillId, this.state.rankId , this.props.token)
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
    skillgroups: state.dataReducer.skillgroups,
    userSkills: state.dataReducer.userSkills,
    token: state.dataReducer.token,
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
