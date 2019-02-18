import React, { Component } from 'react';
import './css/TabCard.css';

class TabCard extends Component {

  render(){
    return (
        <li className="card-tab">
          <a href={this.props.link}> props.name = {this.props.name}</a>
        </li>
    );
  }

}

export default TabCard;
