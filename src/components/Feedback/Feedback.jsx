import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    console.log('click in good');
  };

  handleNeutralClick = () => {
    console.log('click in neutral');
  };

  handleBadClick = () => {
    console.log('click in bad');
  };

  render() {
    return (
      <section className={s.section}>
        <h2 className={s.title}>Please leave feedback</h2>
        <button className={s.button} onClick={this.handleGoodClick}>
          Good
        </button>
        <button className={s.button} onClick={this.handleNeutralClick}>
          Neutral
        </button>
        <button className={s.button} onClick={this.handleBadClick}>
          Bad
        </button>
        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </ul>
      </section>
    );
  }
}

export default Feedback;
