import React, { Component } from "react";
import Section  from "./Section/Section";
import Statistics  from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const onEvtTarget = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [onEvtTarget]: prevState[onEvtTarget] + 1,
    }))
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };
  
  countPositiveFeedbackPercentage() {
    return Math.ceil(((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100);
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Section>
    )
  }
}


export default App;