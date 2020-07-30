import PropTypes from 'prop-types';

const FlashcardsPropTypes = PropTypes.shape({
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  wrong_answers: PropTypes.arrayOf(PropTypes.string),
});

export default FlashcardsPropTypes;
