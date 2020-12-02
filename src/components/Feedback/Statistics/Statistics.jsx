import React, { Component } from 'react';
import style from './Statistics.module.css';

class Statistics extends Component {
  state = {}

  render() {

    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (<div>
      <h2>Statistics</h2>
      <span className={style.statisticItem}>Good: {good}</span>
      <span className={style.statisticItem}>Neutral: {neutral}</span>
      <span className={style.statisticItem}>Bad: {bad}</span>
      <span className={style.statisticItem}>Total: {total}</span>
      <span className={style.statisticItem}>Percent: {positivePercentage}%</span>

    </div>);
  }
}

export default Statistics;
