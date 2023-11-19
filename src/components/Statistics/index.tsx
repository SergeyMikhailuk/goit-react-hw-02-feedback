import React, { Component } from 'react';

import { AppState } from 'components/App';

class Statistics extends Component<StatisticProps> {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    );
  }
}

export default Statistics;

type StatisticProps = AppState & {
  total: number;
  positivePercentage: number;
};
