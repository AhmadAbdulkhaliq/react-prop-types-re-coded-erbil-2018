// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';

class HiRe-Coded extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};