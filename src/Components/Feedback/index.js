import React from 'react';
import './style.scss';

const Feedback = ({ onClick }) => {
  return (
    <>
      <h1>Leave your feedback</h1>
      <div className="buttonCont">
        <button onClick={() => onClick('good')}>Good</button>
        <button onClick={() => onClick('neutral')}>Neutral</button>
        <button onClick={() => onClick('bad')}>Bad</button>
      </div>
    </>
  );
};

export default Feedback;
