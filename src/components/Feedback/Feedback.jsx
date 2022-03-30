import React from 'react';
import Controls from './Controls';
import s from './Feedback.module.css';
import Statistics from './Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBadClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) / (this.state.good + this.state.neutral)
    );
  };

  render() {
    return (
      <section className={s.section}>
        <h2 className={s.title}>Please leave feedback</h2>
        <Controls
          onGood={this.handleGoodClick}
          onNeutral={this.handleNeutralClick}
          onBad={this.handleBadClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}

export default Feedback;
