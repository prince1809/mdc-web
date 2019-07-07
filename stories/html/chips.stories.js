import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/chip'

class DefaultChips extends React.Component {

  constructor(props) {
    super(props);
    this.chipSets = [];
  }

  componentWillUnmount() {
    this.chipSets.forEach(chipSet => chipSet.destroy());
  }

  renderIcon(name, clasess) {
    return (
      <i className={`material-icons mdc-chip__icon ${clasess}`}>
        {name}
      </i>
    )
  }

  renderFilterCheckmark() {
    return (
      <div>
        <svg>
          <path />
        </svg>
      </div>
    );
  }


  renderChip(text, classes, leadingIcon) {
    return (
      <div className={`mdc-chip ${classes}`} tabIndex='0'>
        {leadingIcon ? leadingIcon : ''}
        <div className='mdc-chip__text'>{text}</div>
      </div>
    );
  }

  renderFilterChip(text, classes, leadingIcon) {
    return (
      <div>
        {leadingIcon}
        {this.renderFilterCheckmark()}
        <div>{text}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>Choice Chips</h3>
        <div>
          {this.renderChip('Extra small')}
          {this.renderChip('Small')}
          {this.renderChip('Medium', 'mdc-chip--selected')}
          {this.renderChip('Large')}
          {this.renderChip('Extra Large')}
        </div>


        <h3>Filter Chips</h3>
        <h3>No leading icon</h3>
        <div>
          {this.renderFilterChip('Tops', 'mdc-chip--filter')}
          {this.renderFilterChip('Bottoms', 'mdc-chip--filter')}
          {this.renderFilterChip('Shoes')}
          {this.renderFilterChip('Accessories')}
        </div>


        <h3>With leading icon</h3>
        <div>
          {this.renderFilterChip('Alice', 'mdc-chip--selected', this.renderIcon('face', 'mdc-chip__icon--leading'))}
          {this.renderFilterChip('Bob', 'mdc-chip--selected', this.renderIcon('face', 'mdc-chip__icon--leading'))}
          {this.renderFilterChip('Charlie', 'mdc-chip--selected', this.renderIcon('face', 'mdc-chip__icon--leading'))}
          {this.renderFilterChip('Danielle', 'mdc-chip--selected', this.renderIcon('face', 'mdc-chip__icon--leading'))}
        </div>
      </div>
    )
  }
}

storiesOf('Chips', module)
  .add('Default', () => <DefaultChips />);
