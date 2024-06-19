import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const cafeInfo = {
    title: 'Sip Happens Café',
    text: 'Please leave your feedback about our service by selecting one of the options below.',
  };
  const { title, text } = cafeInfo;

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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

  const totalFeedback = calcTotalFeedback();
  const positiveStatistic = calcPositiveStatistic();

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
      ></Options>
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveStatistic={positiveStatistic}
      ></Feedback>
    </>
  );
}

export default App;
