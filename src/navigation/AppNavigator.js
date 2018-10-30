import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
class HomeScreen02 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}
class HomeScreen03 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class HomeScreen04 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class HomeScreen05 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class HomeScreen06 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class HomeScreen07 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const HomeTab = createMaterialTopTabNavigator({
  Tab1: HomeScreen,
  Tab2: HomeScreen02,
  Tab3: HomeScreen03,
  Tab4: HomeScreen04,
  Tab5: HomeScreen05,
  Tab6: HomeScreen06,
  Tab7: HomeScreen07,
}, {
  tabBarOptions: {
    scrollEnabled: true,
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: Dimensions.get('window').width / 4,
    },
    style: {
      backgroundColor: 'tomato',
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  },
});

HomeTab.navigationOptions = {
  header: null
};

const HomeTabStack = createStackNavigator({
  Home: HomeTab,
  Detail: HomeScreen02,
});

export default AppNavigator =  createBottomTabNavigator(
  {
    Home: HomeTabStack,
    Setting: HomeScreen02,
    Profile: HomeScreen03,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Setting') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
