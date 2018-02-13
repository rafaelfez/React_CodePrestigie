import React, { Component } from 'react';

class Foto extends Component {
  render() {
    return (
      <img style={{height: 200, width: 200, marginTop: 20, borderRadius: 100}} src={this.props.url} />
    );
  }
}

export default Foto;