import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar, Easing, Animated } from 'react-native';
import { Button, Header, List, ListItem, SearchBar, Overlay, Icon } from 'react-native-elements';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Search from '../screens/Search';
import Filter from '../screens/Filter';
import Profile from '../screens/Profile';
import SearchHeader from '../components/SearchHeader';

const HomeNav = StackNavigator({
  Home: { 
    screen: Search,
    navigationOptions: ({navigation}) => ({
        /*tabBarVisible: true, //godlike line
        headerTintColor: '#3F5161',
        //headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        title: `Skills Matrix`,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex:1 },
      }),*/
        header: <SearchHeader navigation={navigation}/>
    })  
  },
  Profile: { 
    screen: Profile,
    navigationOptions: ({navigation}) => ({
        tabBarVisible: true, //godlike line
        headerTintColor: '#FFF',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex:1 },
        title: `Profile`,
        headerStyle: {
          backgroundColor: '#445E75',
        },
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

  cardStyle: {
    backgroundColor: 'rgba(0,0,0,1)',
  }
})

export default HomeNav;