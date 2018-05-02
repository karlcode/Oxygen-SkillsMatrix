import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


import Navigation from './navigation/Navigation';
import { StyleSheet, View, StatusBar } from 'react-native';

import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
            />
          <Navigation/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
