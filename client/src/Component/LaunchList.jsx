import React, {Component} from 'react';
import Launch from './Launch';
class LaunchList extends Component {
  render () {
    let launches = this.props.launches.map(launch => {
      return <Launch 
        key={launch.id}
        rocket={launch.rocketName}
        agency={launch.agencyName}
        location={launch.launchLocation}
        time={launch.launchTime}
        launchWiki={launch.wikiLinks.launch}
        agencyWiki={launch.wikiLinks.agency}
        rocketWiki={launch.wikiLinks.rocket}
        />
    })
    return (
      <section className='launchList'>
        { launches }
      </section>
    )
  }
}

export default LaunchList;