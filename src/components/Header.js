import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ul>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Github</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
