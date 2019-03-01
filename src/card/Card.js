import React, { Component } from 'react';
import TitleCard from './TitleCard';
import DetailsCard from './DetailsCard';
import TabCard from './TabCard';
import './css/Card.css';

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    }
  }

  render(){
    return (
      <div className="card-wrapper">
        <div className="card-info">
          <TitleCard className="card-title" name={this.state.title}/>
          <DetailsCard className="card-detals" />
        </div>

      </div>

    );
  }
}

export default Card;
