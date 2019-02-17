import React, { Component } from 'react';
import TitleCard from './TitleCard';
import DetailsCard from './DetailsCard';

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
        <div className="card-tabs"></div>

        <TitleCard name={this.state.title}/>
        <DetailsCard/>
      </div>

    );
  }
}

export default Card;
