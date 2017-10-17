import React, {Component} from 'react';

class Launch extends Component {
  render() {
    return (
      <div class='launchItem'>
        <table class='table table-responsive table-bordered'>
          <thead>
            <tr>
              <th>Rocket Name</th>
              <th>Agency Name</th>
              <th>Launch Location</th>
              <th>Launch Time</th>
              <th>Wiki for launch</th>
              <th>Wiki for agency</th>
              <th>Wiki for rocket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.props.launch.rocketName}</th>
              <th>{this.props.launch.agencyName}</th>
              <th>{this.props.launch.launchLocation}</th>
              <th>{this.props.launch.launchTime}</th>
              <th>{this.props.launch.wikiLinks.launch}</th>
              <th>{this.props.launch.wikiLinks.agency}</th>
              <th>{this.props.launch.wikiLinks.rocket}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Launch;