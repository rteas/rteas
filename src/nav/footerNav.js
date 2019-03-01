import React, { Component } from 'react';
import Nav from './Nav';
import './css/Nav.css';

class FooterNav extends Nav {

  render(){
    return (
      <div className="title-wrapper">
        <h2>Let's keep the world spinin'</h2>
      </div>
    );
  }
}

export default FooterNav;
