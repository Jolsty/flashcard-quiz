/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import shuffle from 'lodash.shuffle';

import { decode } from '@src/utils';

import Header from '@src/components/Header';
import FlashcardList from '@src/components/FlashcardList';

import '@src/css/styles.css';

export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php', { params: { amount: 20 } })
      .then((res) => {
        setFlashcards(
          res.data.results.map(({ difficulty, question, incorrect_answers, correct_answer }, index) => {
            const answer = decode(correct_answer);
            const options = shuffle([...incorrect_answers.map((el) => decode(el)), answer]);

            return { id: `${index}-${Date.now()}`, answer, options, question: decode(question), difficulty };
          }),
        );

        return null;
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <main className="container">
      <Header />
      <FlashcardList flashcards={flashcards} />
    </main>
  );
}
