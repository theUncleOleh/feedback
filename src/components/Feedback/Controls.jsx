import React from 'react';
import s from './Controls.module.css';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Controls;
