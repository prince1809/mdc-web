import React from 'react';
import classnames from 'classnames';

import { storiesOf } from '@storybook/react';

import '../styles/card'

const CardTypes = {
  basic: 'basic',
  basicHeader: 'basicHeader',
  basicMediaText: 'basicMediaText',
  basicButtons: 'basicButtons',
  basicIcons: 'basicIcons',
  uiControl: 'uiControl',
};

const classes = ({ className, shaped, type }) => {
  const { basicHeader, basicMediaText, uiControl } = CardTypes;
  return classnames('mdc-card demo-card',
    {
      'demo-card-shaped': shaped,
      'demo-basic-with-header': type === basicHeader,
      'demo-basic-with-text-over-media': type === basicMediaText,
      'demo-ui-control': type === uiControl,
    }, className);
};

class Card extends React.Component {
  render() {
    const { actions, image, type } = this.props;
    const { basicHeader, basicMediaText, basicButtons, basicIcons, uiControl } = CardTypes;
    return (
      <div className={classes(this.props)}>
        {type === basicHeader ? <CardHeader /> : null}
        <div>
          {image ? <CardMedia showText={type === basicMediaText} square={type === uiControl} /> : null}
          {type !== basicHeader && type !== basicMediaText ? <CardHeader /> : null}
          {type !== uiControl ? <CardSecondary /> : null}
        </div>
        {actions ? (
          <CardActionRow showIcons={type !== basicButtons} showButtons={type !== basicButtons} />
        ) : null}
      </div>
    );
  }
}

const CardHeader = () => {
  return (
    <div className='demo-card__primary'>
      <h2>Our Changing Planet</h2>
      <h3>by Kurt Wagner</h3>
    </div>
  );
}

const CardSecondary = () => {
  return (
    <div className="demo-card__secondary">
      Visit ten places on our planet that are undergoing the biggest changes today.
    </div>
  )
}

const CardMedia = ({ square = false, showText = false }) => {
  return (
    <div>
      {showText ? <div>
        <CardHeader />
      </div> : null}
    </div>
  )
}

class CardActionIcon extends React.Component {

  render() {
    return (
      <button>
        {this.props.icon}
      </button>
    );
  }
}

class CardActionButton extends React.Component {

  render() {
    return (
      <button>
        {this.props.text}
      </button>
    )
  }
}

class CardActionRow extends React.Component {
  render() {
    const { showIcons = true, showButtons = true } = this.props;
    return (
      <div className='mdc-card__actions'>
        {
          showButtons ?
            <div>
              <CardActionButton text='Read' />
              <CardActionButton text='Bookmark' />
            </div> : null
        }
      </div>
    )
  }
}



const CardDemos = () => {
  return (
    <section className='demo-card-collection'>
      <Card image />
      <Card actions />
      <Card actions shaped />
    </section>
  );
}

storiesOf('Card', module)
  .add('Demos', () => <CardDemos />);
