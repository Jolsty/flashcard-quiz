import React from 'react';
import PropTypes from 'prop-types';

import FlashcardPropTypes from '@src/prop-types/FlashcardPropTypes';

import Flashcard from '@src/components/Flashcard';

export default function FlashcardList({ flashcards }) {
  if (!flashcards) {
    return null;
  }

  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
}

FlashcardList.propTypes = {
  flashcards: PropTypes.arrayOf(FlashcardPropTypes).isRequired,
};
