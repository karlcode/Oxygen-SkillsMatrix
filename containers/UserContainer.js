import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Picker
} from "react-native";
import { Avatar, List, ListItem } from "react-native-elements";
import PropTypes from "prop-types";

import Icon from "../components/Icon";
import InfoText from "../components/InfoText";
import ModalDropdown from "react-native-modal-dropdown";

class UserContainer extends Component {
  state = {
    pushNotifications: true,
    isVisible: false
  };

  onPressOptions = props => {
    navigation.navigate("Options");
  };

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications
    }));
  };

  showFadeAnimationDialog = () => {
    this.fadeAnimationDialog.show();
  };
  render() {
    const {
      Clearance,
      Email,
      FirstName,
      LastName,
      Phone,
      Nationality,
      Security,
      Location,
      Position,
      Team,
      Banding
    } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View>
            <Text style={{ fontSize: 16 }}>
              {FirstName}
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 16
              }}
            >
              {Email}
            </Text>
          </View>
        </View>
        <InfoText text="Work" />
        <List containerStyle={styles.listContainer}>
          <ListItem
            title="Skills"
            onPress={() => {
              navigate("Options", { title: "Skills" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#FAD291" }}
                icon={{
                  type: "font-awesome",
                  name: "gears"
                }}
              />
            }
          />
          <ListItem
            title="Team"
            rightTitle={Team.Name}
            onPress={() => {
              navigate("Options", { title: "Team" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#FAD291" }}
                icon={{
                  type: "font-awesome",
                  name: "users"
                }}
              />
            }
          />
          <ListItem
            title="Position"
            rightTitle={Position["Name"]}
            onPress={() => {
              navigate("Options", { title: "Position" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#FAD291" }}
                icon={{
                  type: "font-awesome",
                  name: "money"
                }}
              />
            }
          />
          <ListItem
            title="Clearance"
            rightTitle={Clearance}
            onPress={() => {
              navigate("Options", { title: "Clearance" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#FEA8A1" }}
                icon={{
                  type: "material",
                  name: "verified-user"
                }}
              />
            }
          />
          <ListItem
            title="Banding"
            rightTitle={'Banding'}
            onPress={() => {
              navigate("Options", { title: "Banding" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#FEA8A1" }}
                icon={{
                  type: "material",
                  name: "assessment"
                }}
              />
            }
          />
        </List>
        <InfoText text="Personal Details" />
        <List containerStyle={styles.listContainer}>
          <ListItem
            title="Location"
            rightTitle={Location.Description}
            onPress={() => {
              navigate("Options", { title: "Location" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#57DCE7" }}
                icon={{
                  type: "material",
                  name: "place"
                }}
              />
            }
          />
          <ListItem
            title="Nationality"
            rightTitle={Nationality}
            onPress={() => {
              navigate("Options", { title: "Nationality" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#57DCE7" }}
                icon={{
                  type: "material",
                  name: "language"
                }}
              />
            }
          />
          <ListItem
            title="Contact Number"
            rightTitle={Phone}
            onPress={() => {
              navigate("Options", { title: "Phone" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#57DCE7" }}
                icon={{
                  type: "entypo",
                  name: "phone"
                }}
              />
            }
          />
          <ListItem
            title="Email"
            rightTitle={Email}
            onPress={() => {
              navigate("Options", { title: "Email" });
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: "#57DCE7" }}
                icon={{
                  type: "materialcommunityicons",
                  name: "email"
                }}
              />
            }
          />
        </List>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    marginTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
  },
  userRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6
  },
  userImage: {
    marginRight: 12
  },
  listContainer: {
    marginTop: 0,
    borderTopWidth: 0
  },
  listItemContainer: {
    borderBottomColor: "#ECECEC"
  },
  dialogContentView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default UserContainer;
