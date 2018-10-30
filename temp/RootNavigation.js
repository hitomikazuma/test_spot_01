import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#8bb745' }]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#b72123' }]} />
);

const FifthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#46abb7' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'あいうえお' },
      { key: 'second', title: 'かきくけこさしすせそ' },
      { key: 'third', title: 'たちつてと' },
      { key: 'fourth', title: 'なにぬねの' },
      { key: 'fifth', title: 'なにぬねの' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.header}
      scrollEnable
      tabStyle={{padding: 0, width: 100}}
    />
  );

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000'
  },
});
