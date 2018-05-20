import React, { Component } from 'react'
import { Card, Icon, ListItem, Rating } from 'react-native-elements'
import {
  Image,
  ImageBackground,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native'
import PropTypes from 'prop-types'

import Email from '../components/Email'
import Separator from '../components/Separator'
import Tel from '../components/Tel'


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'flex-start',
        padding: 30,
      },
    }),
  },
  placeIcon: {
    color: 'black',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#01C89E',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})

class ProfileContainer extends Component {
  
  renderHeader = () => {
    const {
      Clearance,
      FirstName,
      LastName,
      Nationality,
      Security,
      Location,
      Position,
      Team,
      Banding
    } = this.props

    
    return (
      <View style={styles.headerContainer}>
        
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              //source={{
                //uri: avatar,
              //}}
            />
            <Text style={styles.userNameText}>{FirstName} {LastName}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <Text style={styles.userCityText}>
                   {Location.Description}
                </Text>
            </View>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                   Team: {Team.Name}
                </Text>
              </View>
            </View>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                   Position: {Position.Name}
                </Text>
              </View>
            </View>
            
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                   Nationality: {Nationality}
                </Text>
              </View>
            </View>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                   Security Clearance: {Clearance}
                </Text>
              </View>
            </View>
            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                   {Banding}
                </Text>
              </View>
            </View>
            
          </View>
      </View>
    )
  }

  notesData = this.props.EmployeeSkillSet.results.map(key => {
    return { header: key.Skill.SkillGroup.Name, id: key.SkillId, data: key.Skill };
  });
  _renderItem = ({ item, index, section }) => {
      return (
        <View>
          <TouchableOpacity>
            <ListItem
              key={item.Id}
              title={"HI"}
              
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
  _rightTitle = (rank) => {
    switch (rank){
      case "1": 
        return (
          <Text>Beginner</Text>
        );
      case "2": 
        return (
          <Text>Intermediate</Text>
        );
      case "3": 
        return (
          <Text>Experienced</Text>
        );
      case "4": 
        return (
          <Text>Expert</Text>
        );
      default: 
        return null
      }
    }
  render() {
    const { Phone, Email } = this.props;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {Separator()}
            <View style={{padding: 30}}>
              <View style={styles.userAddressRow}>
                <View style={styles.userCityRow}>
                  <Text style={styles.userCityText}>
                    Phone: {Phone}
                  </Text>
                </View>
              </View>
              <View style={styles.userAddressRow}>
                <View style={styles.userCityRow}>
                  <Text style={styles.userCityText}>
                    Email: {Email}
                  </Text>
                </View>
              </View>
            </View>
            {Separator()}
            { this.props.EmployeeSkillSet.results[0] ? 
              <View style={{padding: 20}}>
              {
                this.props.EmployeeSkillSet.results.map((u, i) => {
                  return (
                    <ListItem
                      key={i}
                      containerStyle={{ borderBottomColor: '#EDEDED' }}
                      titleNumberOfLines={2}
                      title={u.Skill.Name}
                      hideChevron
                      subtitle={<View style={{paddingLeft: 10}}>
                                {this._rightTitle(u.SkillRankId)}
                                <Rating
                                  type="star"
                                  style={{paddingVertical: 5}}
                                  fractions={0}
                                  ratingCount={4}
                                  startingValue={Math.round(u.SkillRankId)}
                                  readonly
                                  imageSize={10}
                                /></View>}
                    />
                  );
                })
              }
              </View>
              :
              <View style={{padding: 20}}>
                <Text>User has not added any skills yet!</Text>
              </View>
            }

            
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default ProfileContainer