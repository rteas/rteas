import React, { Component } from 'react';
import './css/Nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="title-wrapper">
        <h2 className="card-title"> props.name = {this.props.name}</h2>
        <h3 className="card-subtitle">Subtitle</h3>
      </div>
    );
  }
}

export default Nav;
