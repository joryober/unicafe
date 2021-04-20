import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ statistics }) => {
  statistics = statistics.map((statistic) => (
    <p>
      {statistic.name} {statistic.count}
    </p>
  ));
  return (
    <>
      {statistics[0]}
      {statistics[1]}
      {statistics[2]}
      {statistics[3]}
      {statistics[4]}
      {statistics[5]}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let statistics = [
    {
      name: "good",
      count: good,
    },
    {
      name: "neutral",
      count: neutral,
    },
    {
      name: "bad",
      count: bad,
    },
    {
      name: "all",
      count: good + neutral + bad,
    },
    {
      name: "average",
      count:
        good + neutral + bad > 0 ? (good - bad) / (good + neutral + bad) : 0,
    },
    {
      name: "positive",
      count:
        good + neutral + bad > 0
          ? (good / (good + neutral + bad)) * 100 + " %"
          : 0 + " %",
    },
  ];

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  );
};

export default App;
