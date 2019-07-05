import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/button.scss'

class DefaultButton extends React.Component {

  renderButtonVariant(title, variantClass) {
    return (
      <div>
        <h3>{title}</h3>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <span>Default</span>
        </button>
        <button>
          <span>Dense</span>
        </button>
        <button>
          <i>favorite</i>
          <span>Icon</span>
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
  .add('to Storybook', () => <DefaultButton />);
