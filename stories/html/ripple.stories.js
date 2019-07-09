import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/ripple'

class RippleDemos extends React.Component {
  ripples = [];

  initRipple = buttonEl => {

  };

  renderRippleVariant(title, variant, text) {
    return (
      <div>
        <div className='ripple-demos'>
          <div className='ripple-demo-col'>
            <h3 className='mdc-typography--subtitle1'>{title}</h3>
            <div tabIndex='0' className={variant} ref={this.initRipple}>
              {text}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderRippleVariant('Bounded Ripple', 'ripple-demo-box', 'Interact with me')}
        {this.renderRippleVariant('Unbounded Ripple', 'ripple-demo-icon material-icons mdc-ripple-radius-unbounded', 'favorite')}
        {this.renderRippleVariant('Theme Colors: Primary', 'ripple-demo-box ripple-demo-box--primary', 'Primary')}
        {this.renderRippleVariant('Theme Colors: Secondary', 'ripple-demo-box ripple-demo-box--secondary', 'Secondary')}
      </div>
    )
  }
}

storiesOf('Ripple', module)
  .add('Default', () => <RippleDemos />);
