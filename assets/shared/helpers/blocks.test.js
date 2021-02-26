/**
 * Internal dependencies
 */
import { getFirstBlockByName } from './blocks';

describe( 'getFirstBlockByName', () => {
	it( 'should get the first block with correct name', () => {
		const blocks = [
			{ name: 'a', innerBlocks: [] },
			{
				name: 'b',
				innerBlocks: [ { name: 'f' }, { name: 'g' } ],
			},
			{
				name: 'c',
				innerBlocks: [
					{ name: 'h' },
					{
						name: 'i',
						innerBlocks: [
							{ name: 'j' },
							{ name: 'wally' },
							{ name: 'k' },
						],
					},
				],
			},
			{ name: 'd' },
			{ name: 'e', innerBlocks: [] },
		];
		expect( getFirstBlockByName( 'wally', blocks ).name ).toEqual(
			'wally'
		);
	} );
} );
