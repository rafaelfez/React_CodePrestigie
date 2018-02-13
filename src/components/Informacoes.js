import React, { Component } from 'react';

class Informacoes extends Component {
  render() {
    return (
      <div>
        <p>Idade: {this.props.idade}</p>
        <p>Profissão: {this.props.profissao}</p>
        <p>Email: <a href={"mailto:" + this.props.email}> {this.props.email} </a> </p>
      </div>
    );
  }
}

export default Informacoes;