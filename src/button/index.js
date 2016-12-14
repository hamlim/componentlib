import React from 'react';
import cxs from 'cxs';
import * as BaseStyles from '../styles';


export default const Button = (clickHandler, filled, fill, color, ...props) => {
  const buttonStyles = cxs({
    all: 'unset',
    display: 'inline-block',
    textAlign: 'center',
    height: '2em',
    lineHeight: '2em',
    padding: '.5em 1em',
    backgroundColor: this.props.filled ? this.props.fill : BaseStyles.colors.white,
    color: this.props.color,
    border: 'solid 1px currentColor',
    borderRadius: '4px',
    transition: 'color 250ms ease, background-color 250ms ease',
    ':hover': {
      backgroundColor: !this.props.filled ? this.props.color : BaseStyles.colors.white,
      color: !this.props.filled ? this.props.color : BaseStyles.colors.white,
      transition: 'color 250ms ease, background-color 250ms ease'
    },
    ':focus': {
      backgroundColor: !this.props.filled ? this.props.color : BaseStyles.colors.white,
      color: !this.props.filled ? this.props.color : BaseStyles.colors.white,
      transition: 'color 250ms ease, background-color 250ms ease'
    }
  });
  return (
    <button onClick={clickHandler()} className={buttonStyles} type="button">
      {this.props.children}
    </button>
  );
};