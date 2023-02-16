// import React from 'react';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

// export class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (!this.state.good && !this.state.neutral && !this.state.bad) {
//       return 0;
//     }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   handlIncrementReview = event => {
//     const { name } = event.target;
//     console.dir(event.target);

//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handlIncrementReview}
//         />
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback}
//           positivePercentage={this.countPositiveFeedbackPercentage}
//         />
//       </Section>
//     );
//   }
// }
