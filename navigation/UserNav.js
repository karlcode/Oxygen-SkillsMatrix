import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Easing, Animated } from 'react-native';
import { Button, Header, List, ListItem, SearchBar, Overlay, Icon } from 'react-native-elements';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import User from '../screens/User';
import Options from '../screens/Options';


const UserNav = StackNavigator({
  User: { 
    screen: User,
    navigationOptions: ({navigation}) => ({
      
    })  
  },
  Options: { 
    screen: Options,
    navigationOptions: ({navigation}) => ({
    }),
  },
},
{
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor:"transparent",
    opacity:0.99
    
  }
})

export default UserNav;