import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from 'app/src/screens/HomeScreen';
import LinksScreen from 'app/src/screens/LinksScreen';
import SettingsScreen from 'app/src/screens/SettingsScreen';

import {
  HomeTabIcon,
  SearchTabIcon,
  TakeTabIcon,
  NotificationTabIcon,
  MeTabIcon,
  TabBar,
} from 'app/src/components/Tab';

const createTabStack = (title, screen) => createStackNavigator({
  [title]: { screen }
});

export default createBottomTabNavigator(
  {
    HomeTab: {
      screen: createTabStack('HomeTab', HomeScreen),
      navigationOptions: () => ({
        tabBarIcon: HomeTabIcon
      })
    },
    SearchTab: {
      screen: createTabStack('SearchTab', LinksScreen),
      navigationOptions: () => ({
        tabBarIcon: SearchTabIcon
      })
    },
    NotificationTab: {
      screen: createTabStack('NotificationTab', SettingsScreen),
      navigationOptions: () => ({
        tabBarIcon: NotificationTabIcon
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#C1FC01',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#ccc',
      },
    },
    tabBarComponent: TabBar,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);