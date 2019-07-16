import React from "react";

const Display = props => {
  return (
    <div data-testid="count">
      <h2>Strikes: {props.strikes}</h2>
      <h2>Balls: {props.balls}</h2>
      <h2>Fouls: {props.fouls}</h2>
      <h2>Hits: {props.hits}</h2>
    </div>
  );
};

export default Display;
