import React from 'react';
import { AppLoading, Font, Asset } from 'expo';
import { View } from 'react-native';

import fonts from 'app/src/fonts'
import images from 'app/src/images'

import MainTabNavigator from 'app/src/navigation/MainTabNavigator';
import RootNavigation from 'app/src/navigation/RootNavigation';

export default class App extends React.Component {

  static defaultProps = {
    skipLoadingScreen: false
  }

  state = {
    isLoadingComplete: false
  }

  loadResourcesAsync = async () => {
    await Asset.loadAsync(Object.keys(images).map(key => images[key]));
    await Font.loadAsync(fonts);
    return true;
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return(
      <RootNavigation />
    );
  }
}
