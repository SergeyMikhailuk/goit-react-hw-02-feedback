import React, { Component } from 'react';
import style from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <h1>Please leave feedback</h1>
        {options.map((button, index) => {
          return (
            <button key={button} className={style.button} onClick={(e) => { onLeaveFeedback(options[index]) }}>{button}</button>
          )
        })}
      </div>
    );
  }
}

export default FeedbackOptions;