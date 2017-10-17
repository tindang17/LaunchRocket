import React, {Component} from 'react';
import LaunchList from './LaunchList';
class Main extends Component {
  render() {
    return(
      <main className="container">
        <LaunchList launches={ this.props.launches } />
      </main>
    )
  }
}

export default Main;