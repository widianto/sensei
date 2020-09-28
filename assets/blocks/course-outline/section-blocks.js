import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { Button, Icon } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { chevronDown, chevronUp, more } from '@wordpress/icons';

[
	{ name: 'enrolled', label: 'Enrolled' },
	{ name: 'notenrolled', label: 'Not Enrolled' },
	{ name: 'outline', label: 'Course Outline' },
].forEach( ( { name, label, ...options } ) => {
	const EditSection = ( { clientId } ) => {
		const [ collapsed, collapse ] = useState( false );

		const blockCount = useSelect(
			( select ) => select( 'core/editor' ).getBlocks( clientId ).length,
			[]
		);

		const toggleCollapse = () => collapse( ! collapsed );
		return (
			<div
				className={ `sensei-block-section ${
					collapsed ? 'collapsed' : ''
				}` }
			>
				<div className="sensei-block-section-header">
					<button
						className="sensei-block-section-name"
						onClick={ toggleCollapse }
					>
						{ label }
						{ collapsed ? ` (${ blockCount })` : '' }
					</button>
					<Button className="collapser" onClick={ toggleCollapse }>
						<Icon
							className="components-panel__arrow"
							icon={ collapsed ? chevronDown : chevronUp }
						/>
					</Button>
				</div>
				<div className="sensei-block-section-blocks">
					<InnerBlocks />
				</div>
				<div className="sensei-block-section-footer"></div>
			</div>
		);
	};

	registerBlockType( `sensei-lms/course-section-${ name }`, {
		title: `${ label } Section`,
		icon: more,
		category: 'sensei-lms',
		supports: {
			html: false,
			customClassName: false,
		},
		edit: EditSection,
		save() {
			return <InnerBlocks.Content />;
		},
		...options,
	} );
} );
