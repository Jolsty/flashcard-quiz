import React, { useState } from 'react';

import FlashcardPropTypes from '@src/prop-types/FlashcardPropTypes';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const handleFlipClick = () => setFlip(!flip);

  const handleFlipKeyboard = (e) => {
    if (e.key === 'Enter') {
      setFlip(!flip);
    }
  };

  if (!flashcard || Object.keys(flashcard).length === 0) {
    return null;
  }

  const { question, answer, options } = flashcard;

  return (
    <div className={`flashcard ${flip ? 'flip' : ''}`} onClick={handleFlipClick} role="button" tabIndex={0} onKeyDown={handleFlipKeyboard}>
      <div className="front">
        <h3>{question}</h3>
        <ul className="options">
          {options.map((option) => (
            <li key={option} className="option">
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="back">{answer}</div>
    </div>
  );
}

Flashcard.propTypes = {
  flashcard: FlashcardPropTypes.isRequired,
};
