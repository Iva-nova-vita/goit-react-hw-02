import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const cafeInfo = {
  title: 'Sip Happens Café',
  text: 'Please leave your feedback about our service by selecting one of the options below.',
};

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
};

function App() {
  const { title, text } = cafeInfo;
  const [feedback, setFeedback] = useState(initialState);
  const totalFeedback = calcTotalFeedback();
  const positiveStatistic = calcPositiveStatistic();
  useEffect(
    () => localStorage.setItem('feedback', JSON.stringify(feedback)),
    [feedback]
  );

  function updateFeedback(option) {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  }

  function resetFeedback() {
    const initialFeedback = { ...feedback };
    for (const key in initialFeedback) {
      initialFeedback[key] = 0;
    }
    setFeedback(initialFeedback);
  }

  function calcTotalFeedback() {
    let total = 0;
    for (const key in feedback) {
      total += feedback[key];
    }
    return total;
  }

  function calcPositiveStatistic() {
    const positiveStatistic =
      totalFeedback === 0
        ? 0
        : Math.round((feedback.good / totalFeedback) * 100);
    return positiveStatistic;
  }

  return (
    <>
      <Description title={title} text={text}></Description>
      <Options
        feedback={feedback}
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback !==0 && <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveStatistic={positiveStatistic}
      ></Feedback>}
      {totalFeedback ==0 && <p>No feedback yet</p>}
    </>
  );
}

export default App;
