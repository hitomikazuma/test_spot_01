import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}
class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class Screen4 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class Screen5 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}
class Screen6 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}


const RootStack = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
    Screen4: {
      screen: Screen4,
    },
    Screen5: {
      screen: Screen5,
    },
    Screen6: {
      screen: Screen6,
    }
  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
