import React from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import img from './assets/img/img.jpg';
import './App.scss';

function App() {

  const image = <img width='100%' height='100%' src={img} alt="Logo" />

  return (
    <div className='bx--grid bx--grid--full-width page'>
      <div className='bx--row page'>
        <Header image={image}/>
      </div>
      <div className='bx--row page'>
        <Content />
      </div>
    </div>
  );
}

export default App;
