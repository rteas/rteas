import React, { Component } from 'react';
import './css/Nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: ['home', 'projects', 'contact']
    }
  }


  render(){
    var links = this.state.links.map((link) => {
      return(
        <li>
          <a href={"/"+link}>{link}</a>
        </li>
      );

    });

    return (
      <div className="title-wrapper">
        <ul>
          {links}
        </ul>
      </div>
    );
  }
}

export default Nav;
