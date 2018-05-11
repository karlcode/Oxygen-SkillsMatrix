import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Avatar, List, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import Icon from '../components/Icon'
import InfoText from '../components/InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: (Platform.OS === 'ios' ? 20 :  StatusBar.currentHeight),
    
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listContainer: {
    marginBottom: 50,
    marginTop: 0,
    borderTopWidth: 0,
  },
  listItemContainer: {
    borderBottomColor: '#ECECEC',
  },
})

class UserContainer extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    //navigation: PropTypes.object.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    pushNotifications: true,
  }

  onPressOptions = () => {
    this.props.navigation.navigate('options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  render() {
    const { avatar, citizenship, banding, clearance, position, team, name, emails, username, tels, } = this.props
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              large
              rounded
              source={{
                uri: avatar,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {/*{firstEmail.email}*/}
              {username}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <List containerStyle={styles.listContainer}>
          <ListItem
            switchButton
            hideChevron
            title="Available for work"
            switched={this.state.pushNotifications}
            onSwitch={this.onChangePushNotifications}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            title="Skills"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
          />
          <ListItem
            title="Team"
            rightTitle={team}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
          />
          <ListItem
            title="Position"
            rightTitle={position}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
          />
          <ListItem
            title="Location"
            rightTitle="Sydney, Australia"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
          />
          <ListItem
            title="Contact Number"
            rightTitle={tels[0].number}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
          />
          <ListItem
            title="Personal Email"
            rightTitle={emails[0].email}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
          />
          <ListItem
            title="Work Email"
            rightTitle={emails[1].email}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
          />
          <ListItem
            title="Clearance"
            rightTitle={clearance}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
          />
          <ListItem
            title="Banding"
            rightTitle={banding}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
          />
          <ListItem
            title="Citizenship"
            rightTitle={citizenship}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#f1f1f1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
          />
        </List>
        
      </ScrollView>
    )
  }
}

export default UserContainer