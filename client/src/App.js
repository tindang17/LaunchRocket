import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Banner from './Component/Banner';
import LaunchList from './Component/LaunchList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { launches: []
    };
  }
  componentDidMount() {
    axios.get('/launches.json')
      .then(res => {
       let data = [];
       for(let key in res.data) {
          data.push(res.data[key]);
       }
      console.log(data);
        this.setState({launches: data});
      });
  }
  render() {
    console.log(this.state);
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
          <Banner />
          <LaunchList launches = {this.state.launches} />
        </div>
      </div>
    );
  }
}

export default App;
