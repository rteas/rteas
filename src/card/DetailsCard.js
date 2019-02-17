import React, { Component } from 'react';

class DetailsCard extends Component {

  render(){
    return (
      <div className="details-wrapper">
        <h3>Yes {this.props.details}</h3>
      </div>
    );
  }

}

export default DetailsCard;
