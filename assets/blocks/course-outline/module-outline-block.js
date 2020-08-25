import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

registerBlockType( 'sensei-lms/module-outline', {
	title: __( 'Module', 'sensei-lms' ),
	description: __( 'Used to group one or more lessons.', 'sensei-lms' ),
	icon: 'list-view',
	category: 'sensei-lms',
	parent: [ 'sensei-lms/course-outline' ],
	keywords: [ __( 'Outline', 'sensei-lms' ), __( 'Module', 'sensei-lms' ) ],
	supports: {
		html: false,
		customClassName: false,
	},
	edit( { className } ) {
		return (
			<div className={ className }>
				<RichText
					placeholder={ __( 'Module name', 'sensei-lms' ) }
					onChange={ () => {} }
				/>
				<RichText
					placeholder={ __(
						'Description about the module',
						'sensei-lms'
					) }
					onChange={ () => {} }
				/>
				<InnerBlocks
					template={ [ [ 'sensei-lms/lesson-outline', {} ] ] }
					allowedBlocks={ [ 'sensei-lms/lesson-outline' ] }
				/>
			</div>
		);
	},
	save() {
		return 'Module Frontend!';
	},
} );
