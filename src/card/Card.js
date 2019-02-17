import React, { Component } from 'react';
import TitleCard from './TitleCard';
import DetailsCard from './DetailsCard';
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
        <div className="card-tabs">
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>

        <div className="card-info">
          <TitleCard name={this.state.title}/>
          <DetailsCard/>
        </div>

      </div>

    );
  }
}

export default Card;
