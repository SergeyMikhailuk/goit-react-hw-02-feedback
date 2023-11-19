import React, { Component } from 'react';

import { List } from './ButtonsBar.styled';

class ButtonsBar extends Component<ButtonsBarProps, any> {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <List>
        {options.map(option => (
          <li key={option}>
            <button onClick={onLeaveFeedback} name={option}>
              {option}
            </button>
          </li>
        ))}
      </List>
    );
  }
}

export default ButtonsBar;

type ButtonsBarProps = {
  onLeaveFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: string[];
};
