/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icon from '../../../icons/buttons-icon';

const quizActionsBlock = {
	name: 'sensei-lms/quiz-actions',
	title: __( 'Quiz Actions', 'sensei-lms' ),
	parent: [ 'sensei-lms/quiz' ],
	description: __(
		'Enable a learner to perform specific actions for a quiz.',
		'sensei-lms'
	),
	attributes: {},
	icon,
	edit: () => {
		return (
			<>
				<div className="sensei-lms-quiz-actions">
					<InnerBlocks
						template={ [
							[ 'sensei-lms/button-quiz-complete' ],
							[ 'sensei-lms/button-quiz-save' ],
							[ 'sensei-lms/button-quiz-reset' ],
						] }
						templateLock="all"
						templateInsertUpdatesSelection={ false }
					/>
				</div>
			</>
		);
	},
	save: () => <InnerBlocks.Content />,
};

export default quizActionsBlock;
