/**
 * Internal dependencies
 */
import registerSenseiBlocks from '../register-sensei-blocks';

import questionBlock from './question-block';
import questionsBlock from './quiz-block/quiz-questions';
import quizBlock from './quiz-block';
import quizActionBlocks from './quiz-actions';
import './quiz-store';

registerSenseiBlocks( [
	quizBlock,
	questionsBlock,
	questionBlock,
	...quizActionBlocks,
] );
