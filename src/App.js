import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nome from './components/Nome';
import Informacoes from './components/Informacoes';
import Foto from './components/Foto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Foto url="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/24231791_10214736812283947_8924000894473473106_n.jpg?oh=4d65ad9fd254259c16a2c538fce52ee1&oe=5AD98E5F"/>
        <Nome />
        <Informacoes idade="22" profissao="Desenvolvedor" email="rafafelipesilva@gmail.com"/>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
