import React, { Component } from 'react';
import FeedbackOptions from './ButtonsBar/FeedbackOptions'
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0,
  }

  addFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
    this.calcTotal()
    this.calcPercent()
  }

  calcTotal = () => {
    this.setState(prev => (
      {
        total: prev.good + prev.neutral + prev.bad,
      }))
  }

  calcPercent = () => {
    this.setState(prev => ({
      percent: ~~(100 / (prev.good + prev.neutral + prev.bad) * prev.good * prev.neutral * 0.5)
    }))
  }

  render() {
    const { good, neutral, bad, total, percent } = this.state;
    return (
      <div>
        <FeedbackOptions options={['good', "neutral", "bad"]} onLeaveFeedback={this.addFeedback} />
        {this.state.total > 0
          ?
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent} />
          :
          <Notification message="No feedback given" />}
      </div >
    );
  }
}

export default Feedback;