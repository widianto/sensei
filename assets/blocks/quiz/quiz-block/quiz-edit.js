/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useAutoInserter } from '../../../shared/blocks/use-auto-inserter';
import questionBlock from '../question-block';
import { useQuizStructure } from '../quiz-store';
import QuizSettings from './quiz-settings';

/**
 * Quiz block editor.
 *
 * @param {Object} props
 */
const QuizEdit = ( props ) => {
	return (
		<>
			<div className="sensei-lms-quiz-block__separator">
				<span>{ __( 'Lesson Quiz', 'sensei-lms' ) }</span>
			</div>
			<InnerBlocks
				template={ [
					[ 'sensei-lms/quiz-questions' ],
					[ 'sensei-lms/quiz-actions' ],
				] }
				templateLock="all"
			/>
			<div className="sensei-lms-quiz-block__separator" />
			<QuizSettings { ...props } />
		</>
	);
};

export default QuizEdit;
