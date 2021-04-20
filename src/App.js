import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ name, count }) => {
  return (
    <p>
      {name} {count}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return good + neutral + bad === 0 ? (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  ) : (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>statistics</h1>
      <Statistic name={"good"} count={good} />
      <Statistic name={"neutral"} count={neutral} />
      <Statistic name={"bad"} count={bad} />
      <Statistic name={"all"} count={good + neutral + bad} />
      <Statistic
        name={"average"}
        count={
          good + neutral + bad > 0 ? (good - bad) / (good + neutral + bad) : 0
        }
      />
      <Statistic
        name={"positive"}
        count={
          good + neutral + bad > 0
            ? (good / (good + neutral + bad)) * 100 + " %"
            : 0 + " %"
        }
      />
    </div>
  );
};

export default App;
