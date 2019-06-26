import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={() => props.increment("ball")}>Ball</button>
      <button onClick={() => props.increment("strike")}>Strike</button>
      <button onClick={() => props.increment("foul")}>Foul</button>
      <button onClick={() => props.increment("hit")}>Hit</button>
    </div>
  );
};

export default Dashboard;
