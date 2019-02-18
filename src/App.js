import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card/Card';
import HeaderNav from './nav/headerNav';
import FooterNav from './nav/footerNav';
import Nav from './nav/Nav';

class App extends Component {

  state = {
    loading: true
  };

  componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {

    const loading = this.state.loading;

    if(loading){
      return null;
    }

    return (
      <div>
        <HeaderNav/>
        <Nav/>
        <Card title= "test title"/>
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
