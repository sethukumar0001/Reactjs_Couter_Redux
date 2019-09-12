import React, { Component } from 'react';
import {Provider} from 'react-redux';
// import store from './store/store/index'
import PersistedStore from '../src/store/store/PersistedStore'
import Home from "./components/Home";
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <Provider store={PersistedStore.getDefaultStore().store}>
      <AddItem />
      <Home />
      </Provider>
    );
  }
}

export default App;