import React from 'react';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Favourites from '../screens/Favourites';
import User from '../screens/User';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNav from './HomeNav';

const Navigation = TabNavigator(
  {
    Home: {
      screen: HomeNav,
    },
    //Favourites: { 
      //screen: Favourites,
    //},
    User: { 
      screen: User,
    },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-search`;
        } else if (routeName === 'User') {
          iconName = `md-person`;
        } else if (routeName === 'Favourites') {
          iconName = `ios-star${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#1AADED',                               
      inactiveTintColor: 'grey',
      style: {
        elevation: 0,
        backgroundColor: 'white',
        borderTopColor: "grey"
      },
    },
  }
);

export default Navigation