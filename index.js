import React, { Component } from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';

/*XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;*/

//Redux
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import reducers from './src/redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/rootSaga';

import RouterComponent from "./src/Router";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ...reducers
    }),
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger)
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={styles.safeArea}>
                    <RouterComponent/>
                </SafeAreaView>
            </Provider>
        )
    }
}

const styles = {
    safeArea: {
        flex: 1
    }
};

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('starterKit', () => App);
