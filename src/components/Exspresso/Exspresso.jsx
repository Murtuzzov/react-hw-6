import React, { useState } from "react";

const Exspresso = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood((prevCount) => prevCount + 1);
  };

  const incrementNeutral = () => {
    setNeutral((prevCount) => prevCount + 1);
  };

  const incrementBad = () => {
    setBad((prevCount) => prevCount + 1);
  };

  const TotalFeedback = () => {
    return good + neutral + bad;
  };

  const PositiveFeedbackPercentage = () => {
    const total = TotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  return (
    <>
      {TotalFeedback() > 0 ? (
        <>
          <h1>Good: {good}</h1>
          <h1>Neutral: {neutral}</h1>
          <h1>Bad: {bad}</h1>
          <h1>Total Feedback: {TotalFeedback()}</h1>
          <h1>Positive Feedback Percentage: {PositiveFeedbackPercentage()}%</h1>
        </>
      ) : (
        <Notification message="There is no Feedback :(" />
      )}

      <button onClick={incrementGood}>Good</button>
      <button onClick={incrementNeutral}>Neutral</button>
      <button onClick={incrementBad}>Bad</button>
    </>
  );
};

const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Exspresso;
