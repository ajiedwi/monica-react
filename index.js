/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import configureStore from './src/redux/store'
import React from 'react';
import { Provider } from 'react-redux';
import {AppNavigator} from './src/Navigator'
import { createAppContainer } from "react-navigation";

const store = configureStore()

const AppContainer = createAppContainer(AppNavigator);

const Apps = () => {
    return(
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Apps);
