import React, { Component } from 'react';
import Nav from './Nav';
import './css/Nav.css';

class HeaderNav extends Nav {

  render(){
    return (
      <div className="title-wrapper">
        <h2> Header Nav Here</h2>
      </div>
    );
  }
}

export default HeaderNav;
