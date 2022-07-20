import React, { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0, 
    neutral: 0,
    bad: 0
  }


  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: this.state.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: this.state.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: this.state.bad + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };
  
  countPositiveFeedbackPercentage() {
    return Math.ceil(((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100);
    
  }


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
        <FeedbackOptions options={} onLeaveFeedback={} />
      </Section>
    )
  }
}


export default App;