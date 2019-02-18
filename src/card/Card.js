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
        <div className="card-tabs">
          <ul>
            <TabCard className="card-tab" name="Tab 1" link="/"/>
            <TabCard className="card-tab" name="Tab 2" link="/"/>
            <TabCard className="card-tab" name="Tab 3" link="/"/>
            <TabCard className="card-tab" name="Tab 4" link="/"/>
          </ul>
        </div>

        <div className="card-info">
          <TitleCard className="card-title" name={this.state.title}/>
          <DetailsCard className="card-detals" />
        </div>

      </div>

    );
  }
}

export default Card;
