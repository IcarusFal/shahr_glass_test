import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

/**
 * Components for routes
 */
 import MainDrawer from './scene/MainDrawer';

import {I18nManager} from 'react-native';
I18nManager.forceRTL(true);

class App extends Component {
  render() {
    return (
      <MainDrawer></MainDrawer>
    );
  }
}

export default App;
