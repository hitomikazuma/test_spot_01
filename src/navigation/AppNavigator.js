import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';

import { HomeTabIcon, SearchTabIcon, MeTabIcon } from 'app/src/components/Tab';

import HomeScreen01 from 'app/src/screens/Home/HomeScreen01';
import HomeScreen02 from 'app/src/screens/Home/HomeScreen02';
import HomeScreen03 from 'app/src/screens/Home/HomeScreen03';
import HomeScreen04 from 'app/src/screens/Home/HomeScreen04';
import HomeScreen05 from 'app/src/screens/Home/HomeScreen05';
import HomeScreen06 from 'app/src/screens/Home/HomeScreen06';
import HomeScreen07 from 'app/src/screens/Home/HomeScreen07';

const createTabStack = (title, screen) => createStackNavigator(
  {
    [title]: { screen },
  },
  {
    navigationOptions: {
      title: 'SPOT',
      headerTitleStyle :{
        letterSpacing: 3,
        textAlign: 'center',
        alignSelf:'center',
        fontSize: 24,
        color: '#fff'
      },
      headerStyle:{
        backgroundColor:'#111',
        borderBottomWidth: 0,
      },
    }
  }
);

const Home = createMaterialTopTabNavigator(
  {
    Tab1: HomeScreen01,
    Tab2: HomeScreen02,
    Tab3: HomeScreen03,
    Tab4: HomeScreen04,
    Tab5: HomeScreen05,
    Tab6: HomeScreen06,
    Tab7: HomeScreen07,
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 16,
      },
      tabStyle: {
        width: Dimensions.get('window').width / 3,
      },
      style: {
        backgroundColor: '#111',
      },
      indicatorStyle: {
        height: 3,
        backgroundColor: '#C1FF00'
      }
    },
  });

const AppNavigator =  createBottomTabNavigator(
  {
    Home:
      {
        screen: createTabStack('Home', Home),
        navigationOptions: () => ({
          tabBarIcon: HomeTabIcon,
        }),
      },
    Search: {
      screen: createTabStack('Search', HomeScreen02),
      navigationOptions: () => ({
        tabBarIcon: SearchTabIcon,
      }),
    },
    Profile: {
      screen: createTabStack('Profile', HomeScreen03),
      navigationOptions: () => ({
        tabBarIcon: MeTabIcon,
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#C1FF00',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#111',
      },
    },
  }
);

export default AppNavigator;
