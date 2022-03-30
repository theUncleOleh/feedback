import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onGood}>
        Good
      </button>
      <button className={s.button} onClick={onNeutral}>
        Neutral
      </button>
      <button className={s.button} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default Controls;
