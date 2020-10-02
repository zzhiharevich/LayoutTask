import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
