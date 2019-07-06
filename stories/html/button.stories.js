import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/button'

class DefaultButton extends React.Component {

  constructor(props) {
    super(props);
    this.ripples = [];
  }

  renderButtonVariant(title, variantClass) {
    return (
      <div>
        <h3>{title}</h3>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <span className={`mdc-button__label`}>Default</span>
        </button>
        <button className={`demo-button mdc-button mdc-button--dense ${variantClass}`} ref={this.initRipple}>
          <span className='mdc-button__label'>Dense</span>
        </button>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <i className='material-icons mdc-button__icon'>favorite</i>
          <span className='mdc-button__label'>Icon</span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderButtonVariant('Text Button')}
        {this.renderButtonVariant('Raised Button', 'mdc-button--raised')}
        {this.renderButtonVariant('Unelevated Button', 'mdc-button--unelevated')}
        {this.renderButtonVariant('Outlined Button', 'mdc-button--outlined')}
        {this.renderButtonVariant('Shaped Button', 'mdc-button--unelevated demo-button-shaped')}
      </div>
    )
  }
}

storiesOf('Button', module)
  .add('Default', () => <DefaultButton />);
