import React, { Component } from 'react';
import './css/TitleCard.css';

class TitleCard extends Component {

  render(){
    return (
      <div className="title-wrapper">
        <h2 className="card-title">{this.props.name}</h2>
        <h3 className="card-subtitle">Welcome!</h3>
      </div>
    );
  }

}

export default TitleCard;
