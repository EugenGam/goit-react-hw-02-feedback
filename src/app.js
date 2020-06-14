import React, { Component } from 'react';
import './sass/main.scss';
import Statistic from './Components/Statistic';
import Feedback from './Components/Feedback';
import Notification from './Components/Notifications';

class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  handleClick = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  //
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    }, 0);
  };
  countPositiveFeedbackPercentage = total => {
    if (total > 0) {
      return Math.round((this.state.good / total) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const countPositiv = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Feedback onClick={this.handleClick} />
        {total > 0 ? (
          <Statistic state={this.state} total={total} positiv={countPositiv} />
        ) : (
          <Notification note={'No feedback given'} />
        )}
      </>
    );
  }
}

export default App;
