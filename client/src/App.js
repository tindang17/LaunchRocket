import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Component/Banner';
import Main from './Component/Main';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { launches: []
    };
  }
  componentDidMount() {
    axios.get('/launches')
      .then(res => {
       let data = [];
      console.log('IN APP', res.data);
       for(let key in res.data) {
          data.push(res.data[key]);
       }
        this.setState({launches: data});
      });
  }
  render() {
    console.log("IN APP RENDER", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Header />
          <Main launches = {this.state.launches} />
        </div>
      </div>
    );
  }
}

export default App;
