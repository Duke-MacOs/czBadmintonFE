/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configDev from './config.dev';
import configProd from './config.prod';

if (process.env.NODE_ENV === 'production') {
  window.config = configDev;
} else {
  window.config = configProd;
}

AppRegistry.registerComponent(appName, () => App);
