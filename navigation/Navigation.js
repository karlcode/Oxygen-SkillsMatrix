import React from 'react';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Favourites from '../screens/Favourites';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navigation = TabNavigator(
  {
    Home: {
      screen: Search,
    },
    Favourites: { 
      screen: Favourites,
    },
    Profile: { 
      screen: Profile,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-search`;
        } else if (routeName === 'Profile') {
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