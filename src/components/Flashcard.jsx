import React, { useState, useEffect, useRef } from 'react';

import { outerHeight } from '@src/utils';

import FlashcardPropTypes from '@src/prop-types/FlashcardPropTypes';

export default function Flashcard({ flashcard }) {
  const { question, answer, options, difficulty } = flashcard;

  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');

  const frontEl = useRef();

  const setMaxHeight = () => {
    const totalHeight = [...frontEl.current.children].reduce((acc, child) => acc + outerHeight(child), 35);

    setHeight(totalHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);

    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);

  useEffect(() => {
    setMaxHeight();
  }, [question, answer, options, difficulty]);

  const handleFlipClick = () => setFlip(!flip);

  const handleFlipKeyboard = (e) => {
    if (e.key === 'Enter') {
      setFlip(!flip);
    }
  };

  if (!flashcard || Object.keys(flashcard).length === 0) {
    return null;
  }

  return (
    <div
      className={`flashcard ${flip ? 'flip' : ''}`}
      onClick={handleFlipClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleFlipKeyboard}
      style={{ height }}
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
