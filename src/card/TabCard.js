import React, { Component } from 'react';
import './css/TabCard.css';

class TabCard extends Component {

  constructor(props){
    super(props);
    this.colorDelta="222222";
    this.state = {
      bgColor: props.bgColor,
    }
  }


  render(){
    return (
        <li bgColor={this.state.bgColor} className="card-tab">
          <a href={this.props.link}> props.name = {this.props.name}</a>
        </li>
    );
  }

}

/*
function mouseEnter(event){
  this.setState({bgColor=addHexColor(this.state.bgColor,this.colorDelta)})
}

function mouseExit(event){
  this.setState({bgColor=subtractHexColor(this.state.bgColor,this.colorDelta)})
}

function addHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}

function subtractHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) - parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}
*/

export default TabCard;
