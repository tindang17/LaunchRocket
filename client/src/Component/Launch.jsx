import React, {Component} from 'react';

class Launch extends Component {
  render() {
    return (
      <article>
        <table className='table table-bordered responsive'>
            <header>
              <span><p>Name: {this.props.rocket}</p></span>
            </header>
            <span>
              <p>Agency: {this.props.agency}</p>
              <p>Location: {this.props.location}</p>
              <p>Time: {this.props.time}</p>
              <p>Wiki for launch: {this.props.launchWiki}</p>
              <p>Wiki for agency: {this.props.agencyWiki}</p>
              <p>Wiki for rocket: {this.props.rocketWiki}</p>
            </span>
        </table>
      </article>
    )
  }
}

export default Launch;