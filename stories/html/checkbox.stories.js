import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/checkbox'

class CheckboxDemo extends React.Component {

  constructor(props) {
    super(props);
    this.checkboxes = [];
    this.initCheckbox = checkboxEl => checkboxEl && this.checkboxes.push();
  }

  renderCheckboxVariant(title, inputRefCallback) {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className='mdc-checkbox demo-checkbox' ref={this.initCheckbox}>
          <input type='checkbox' className='mdc-checkbox__native-control' ref={inputRefCallback} />
          <div className='mdc-checkbox__background'>
            <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
              <path className=''
                fill='none'
                stroke='white'
                d='M1.73,12.91 8.1,19.28 22.79,4.59' />
            </svg>
            <div className='mdc-checkbox__mixedmark'></div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderCheckboxVariant('Unchecked')}
        {this.renderCheckboxVariant('Intermediate', inputEl => {
          if (!inputEl) return;
          inputEl.indetermine = true;
        })}
        {this.renderCheckboxVariant('Checked', inputEl => {
          if (!inputEl) return;
          inputEl.checked = true;
        })}
      </div>
    )
  }
}

storiesOf('Checkbox', module)
  .add('Default', () => <CheckboxDemo />);
