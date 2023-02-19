import { useState, useEffect } from 'react';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBagFeedback] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const total = good + neutral + bad;
    const percentage = Math.round((good / total) * 100);
    setTotal(total);
    setPercentage(percentage);
  }, [good, neutral, bad]);

  const handlIncrementReview = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBagFeedback(prevState => prevState + 1);
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
          total={total}
          positivePercentage={percentage}
        />
      </Section>
    </div>
  );
};
