import React, { Component } from 'react';

import Section from 'components/Section';
import ButtonsBar from 'components/ButtonsBar';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Wrapper } from './App.styled';

class App extends Component<{}, AppState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as keyof AppState;

    this.setState(
      prevState =>
        ({
          [name]: prevState[name] + 1,
        }) as AppState
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);

    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <ButtonsBar options={keys} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {!!total ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification />
        )}
      </Wrapper>
    );
  }
}

export default App;

export type AppState = {
  good: number;
  neutral: number;
  bad: number;
};
