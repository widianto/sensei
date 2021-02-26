/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Are the block or any of it's descendants selected.
 *
 * @param {Object}  props
 * @param {boolean} props.isSelected Block selected
 * @param {string}  props.clientId   Block ID
 * @return {boolean} Selection state
 */
export const useHasSelected = ( { isSelected, clientId } ) => {
	return (
		useSelect(
			( select ) =>
				select( 'core/block-editor' ).hasSelectedInnerBlock( clientId ),
			[ clientId ]
		) || isSelected
	);
};

/**
 * Get first block by name.
 *
 * @param {string} blockName Block name.
 * @param {Array}  blocks    Blocks array.
 *
 * @return {Object|boolean} Block or false.
 */
export const getFirstBlockByName = ( blockName, blocks ) => {
	for ( let i = 0; i < blocks.length; i++ ) {
		const block = blocks[ i ];
		if ( blockName === block.name ) {
			return block;
		} else if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
			const innerBlockSearch = getFirstBlockByName(
				blockName,
				block.innerBlocks
			);
			if ( innerBlockSearch ) {
				return innerBlockSearch;
			}
		}
	}

	return false;
};
