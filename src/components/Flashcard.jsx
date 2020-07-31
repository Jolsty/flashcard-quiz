import React, { useState, useEffect, useRef } from 'react';

import FlashcardPropTypes from '@src/prop-types/FlashcardPropTypes';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');

  const frontEl = useRef();

  const handleFlipClick = () => setFlip(!flip);

  const setMaxHeight = () => {
    const height = frontEl.current.getBoundingClientRect().height;
    // Math.max(frontEl.current.getBoundingClientRect().height, '25em');
    console.log('Log: setMaxHeight -> height', height);
    // return '25rem';
  };

  const handleFlipKeyboard = (e) => {
    if (e.key === 'Enter') {
      setFlip(!flip);
    }
  };

  useEffect(() => {
    setHeight(setMaxHeight);
  }, [frontEl]);

  if (!flashcard || Object.keys(flashcard).length === 0) {
    return null;
  }

  const { question, answer, options, difficulty } = flashcard;

  return (
    <div
      className={`flashcard ${flip ? 'flip' : ''}`}
      style={{ height }}
      onClick={handleFlipClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleFlipKeyboard}
    >
      <div className="front" ref={frontEl}>
        <h3 className="question">{question}</h3>
        <ul className="options">
          {options.map((option) => (
            <li key={option} className="option">
              {option}
            </li>
          ))}
        </ul>
        <div className="difficulty">{difficulty}</div>
      </div>
      <div className="back">{answer}</div>
    </div>
  );
}

Flashcard.propTypes = {
  flashcard: FlashcardPropTypes.isRequired,
};
