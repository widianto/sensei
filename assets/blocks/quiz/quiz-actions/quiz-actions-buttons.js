/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { BlockStyles, createButtonBlockType } from '../../button';

export const completeQuizButton = createButtonBlockType( {
	settings: {
		name: 'sensei-lms/button-quiz-complete',
		title: __( 'Complete Quiz', 'sensei-lms' ),
		parent: [ 'sensei-lms/quiz-actions' ],
		description: __(
			'Enable a learner to submit the quiz. This block is only displayed if the prerequisite lesson has been completed and the quiz has not been submitted or graded.',
			'sensei-lms'
		),
		attributes: {
			text: {
				default: __( 'Complete Quiz', 'sensei-lms' ),
			},
		},
		styles: [
			{ ...BlockStyles.Fill, isDefault: true },
			BlockStyles.Outline,
			BlockStyles.Link,
		],
	},
} );

export const saveQuizButton = createButtonBlockType( {
	settings: {
		name: 'sensei-lms/button-quiz-save',
		title: __( 'Save Quiz', 'sensei-lms' ),
		parent: [ 'sensei-lms/quiz-actions' ],
		description: __(
			'Enable a learner to save the quiz. This block is only displayed if the prerequisite lesson has been completed and the quiz has not been submitted or graded.',
			'sensei-lms'
		),
		attributes: {
			text: {
				default: __( 'Save Quiz', 'sensei-lms' ),
			},
		},
		styles: [
			BlockStyles.Fill,
			{ ...BlockStyles.Outline, isDefault: true },
			BlockStyles.Link,
		],
	},
} );

export const resetQuizButton = createButtonBlockType( {
	settings: {
		name: 'sensei-lms/button-quiz-reset',
		title: __( 'Reset Quiz', 'sensei-lms' ),
		parent: [ 'sensei-lms/quiz-actions' ],
		description: __(
			'Enable a learner to reset their progress. This block is only displayed if the quiz has been completed and quiz retakes are enabled.',
			'sensei-lms'
		),
		attributes: {
			text: {
				default: __( 'Reset Quiz', 'sensei-lms' ),
			},
		},
		styles: [
			BlockStyles.Fill,
			{ ...BlockStyles.Outline, isDefault: true },
			BlockStyles.Link,
		],
	},
} );
