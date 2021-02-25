/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import icon from '../../../icons/question-icon';
import { useAutoInserter } from '../../../shared/blocks/use-auto-inserter';
import questionBlock from '../question-block';
import { useQuizStructure } from '../quiz-store';
import QuestionsModal from './questions-modal';

export default {
	name: 'sensei-lms/quiz-questions',
	parent: [ 'sensei-lms/quiz' ],
	category: 'sensei-lms',
	title: __( 'Quiz Questions', 'sensei-lms' ),
	icon,
	description: __( 'Questions in the quiz.', 'sensei-lms' ),
	example: {
		innerBlocks: [
			{
				name: 'sensei-lms/quiz-question',
				attributes: {
					title: __( 'First Example Question', 'sensei-lms' ),
				},
			},
			{
				name: 'sensei-lms/quiz-question',
				attributes: {
					title: __( 'Second Example Question', 'sensei-lms' ),
				},
			},
		],
	},
	edit: ( { isPostTemplate, ...props } ) => {
		useQuizStructure( props );

		useAutoInserter(
			{ name: questionBlock.name, selectFirstBlock: true },
			props
		);

		return (
			<InnerBlocks
				allowedBlocks={ [ 'sensei-lms/quiz-question' ] }
				template={ [ [ 'sensei-lms/quiz-question', {} ] ] }
				templateInsertUpdatesSelection={ false }
				templateLock={ false }
				renderAppender={ () => (
					<QuestionsModal>
						{ __( 'Add Existing Questions', 'sensei-lms' ) }
					</QuestionsModal>
				) }
			/>
		);
	},
	save: () => <InnerBlocks.Content />,
};
