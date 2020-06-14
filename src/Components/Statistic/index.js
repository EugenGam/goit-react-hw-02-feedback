import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Statistic = ({ state, total, positiv }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <h2>Statistic:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiv}%</p>
    </>
  );
};

Statistic.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number,
  positiv: PropTypes.number.isRequired,
};

Statistic.defaultProps = {
  total: 0,
  positiv: 0,
};

export default Statistic;
