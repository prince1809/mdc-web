import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/button'

class DefaultButton extends React.Component {

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
        {this.renderButtonVariant('Raised Button')}
        {this.renderButtonVariant('Unelevated Button')}
        {this.renderButtonVariant('Outlined Button')}
        {this.renderButtonVariant('Shaped Button')}
      </div>
    )
  }
}


storiesOf('Button', module)
  .add('Default', () => <DefaultButton />);
