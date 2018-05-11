import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Easing, Animated } from 'react-native';
import { Button, Header, List, ListItem, SearchBar, Overlay, Icon } from 'react-native-elements';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Search from '../screens/Search';
import Filter from '../screens/Filter';
import Profile from '../screens/Profile';
/*const fade = (props) => {
  const {position, scene} = props

  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
      inputRange: [index - 0.7, index, index + 0.7],
      outputRange: [0.3, 1, 0.3]
  })

  return {
      opacity,
      transform: [{translateX}, {translateY}]
  }
}*/
const HomeNav = StackNavigator({
  Home: { 
    screen: Search,
    navigationOptions: ({navigation}) => ({
        tabBarVisible: true, //godlike line
        //headerTintColor: 'white',
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        //title: `Search`,
      }),
  },
  Profile: { 
    screen: Profile,
    navigationOptions: ({navigation}) => ({
        tabBarVisible: true, //godlike line
        //headerTintColor: 'white',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex:1 },
        title: `Profile`,
        headerRight: (<View />)
      }),
  },
  Filter: { 
    screen: Filter, 
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false, //godlike line
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex:1 },
      title: 'Filter',
      headerRight: (<View />)
    }),
  },
},
{
  /*transitionConfig: () => ({
    screenInterpolator: (props) => {
        return fade(props)
    }
  }),*/
  cardStyle: {
    backgroundColor: 'rgba(0,0,0,1)',
  }
})

export default HomeNav;