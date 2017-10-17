import React, {Component} from 'react';
import Launch from './Launch';
class LaunchList extends Component {
  render () {
    let launches = this.props.launches.map(launch => {
      return <Launch launch = {launch} />
    })
    return (
      <main className='launchList'>
        {launches}
      </main>
    )
  }
}

export default LaunchList;