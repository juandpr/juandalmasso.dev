import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './components/Main';
import AppRouter from './components/AppRouter';
import './App.css';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main>
            <AppRouter/>
          </Main>
        </Router>
      </Provider>
    );
  }
}