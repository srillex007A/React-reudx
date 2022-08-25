/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/Redux/store';
import {Provider} from 'react-redux';
import Article from './src/Content/article';

const App = () => {
  return (
    <Provider store={store}>
      <Article />
    </Provider>
  );
};

export default App;
