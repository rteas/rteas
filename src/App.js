import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card/Card';
import TabCard from './card/TabCard';
import HeaderNav from './nav/headerNav';
import FooterNav from './nav/footerNav';
import Nav from './nav/Nav';

class App extends Component {

  state = {
    loading: true
  };

  componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 250);
  }

  render() {

    const loading = this.state.loading;

    if(loading){
      return null;
    }

    return (
      <div>
        <HeaderNav/>

        <Card title= "< work in progress >"/>
        <FooterNav/>
      </div>
    )


  }
}

export default App;

/* starter code

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
);
*/

/* Tab code
<div className="card-tabs">
  <ul>
    <TabCard className="card-tab" name="Tab 1" link="/"/>
    <TabCard className="card-tab" name="Tab 2" link="/"/>
    <TabCard className="card-tab" name="Tab 3" link="/"/>
    <TabCard className="card-tab" name="Tab 4" link="/"/>
  </ul>
</div>
*/
