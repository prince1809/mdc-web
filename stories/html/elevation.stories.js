import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/elevation'

const MAX_ELEVATION_LEVELS = 24;

class ElevationDemos extends React.Component {

  getElevationDemos() {
    let demos = [];
    for (let x = 0; x <= MAX_ELEVATION_LEVELS; x++) {
      demos.push(
        <div key={'elevation' + x} className={'elevation-demo-surface mdc-elevation--z' + x}>
          {x}dp
        </div>
      )
    }
    return demos;
  }

  render() {
    return (
      <div className='elevation-demo-container'>
        {this.getElevationDemos()}
      </div>
    )
  }
}

storiesOf('Elevation', module)
  .add('Default', () => <ElevationDemos />);
