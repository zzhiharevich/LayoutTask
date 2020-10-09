import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import img from './assets/img/img.jpg';
import './App.module.scss';

class App extends Component {

  render() {

    const image = <img width='100%' height='100%' src={img} alt="Logo" />;

    return (
      <>
        <Header image={image}/>
        <Content />
      </>
    );
  }
}

export default App;
