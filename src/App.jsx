import React from 'react';

import Header from '@src/components/Header';
import FlashcardList from '@src/components/FlashcardList';

import SAMPLE_FLASHCARDS from '@src/mock/SAMPLE_FLASHCARDS';

import '@src/css/styles.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <FlashcardList flashcards={SAMPLE_FLASHCARDS} />
    </React.Fragment>
  );
}
