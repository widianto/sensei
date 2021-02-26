/**
 * WordPress dependencies
 */
import { select, subscribe, dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import registerSenseiBlocks from '../register-sensei-blocks';
import { getFirstBlockByName } from '../../shared/helpers/blocks';

import questionBlock from './question-block';
import quizBlock from './quiz-block';
import './quiz-store';

registerSenseiBlocks( [ quizBlock, questionBlock ] );

let hasQuestions;
const unsubscribe = subscribe( () => {
	hasQuestions = select( 'core/editor' ).getEditedPostAttribute( 'meta' )
		?._quiz_has_questions; // eslint-disable-line camelcase

	const blocks = select( 'core/block-editor' ).getBlocks();
	if ( hasQuestions === undefined || blocks.length === 0 ) {
		return;
	}

	const { insertBlock } = dispatch( 'core/block-editor' );
	const quizBlockInstance = getFirstBlockByName( 'sensei-lms/quiz', blocks );

	if ( ! quizBlockInstance && hasQuestions ) {
		setTimeout(
			() => insertBlock( createBlock( 'sensei-lms/quiz', {} ) ),
			1
		);
	}

	unsubscribe();
} );
