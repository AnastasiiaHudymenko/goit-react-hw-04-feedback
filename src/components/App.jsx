import { useState } from 'react';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBagFeedback] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good && !neutral && !bad) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handlIncrementReview = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;
      case 'bad':
        setBagFeedback(bad + 1);
        break;
      default:
        return;
    }
  };

  const cls = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
    marginTop: 50,
  };

  return (
    <div style={cls}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handlIncrementReview}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};
