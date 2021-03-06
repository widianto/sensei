/**
 * Internal dependencies
 */
import { normalizeFeaturesData, normalizeSetupWizardData } from './normalizer';

describe( 'Data normalizer', () => {
	const expectedFeaturesData = {
		selected: [ 'free' ],
		options: [
			{
				product_slug: 'free',
				slug: 'free',
				title: 'Title — Free',
				rawTitle: 'Title',
				price: 0,
			},
			{
				product_slug: 'price',
				slug: 'price',
				title: 'Title — $100.00 per year',
				rawTitle: 'Title',
				price: '$100.00',
			},
			{
				product_slug: 'installed',
				slug: 'installed',
				title: 'Title — Installed',
				rawTitle: 'Title',
				price: 0,
				status: 'installed',
			},
			{
				product_slug: 'woocommerce',
				slug: 'woocommerce',
				title: 'WooCommerce* — Free',
				rawTitle: 'WooCommerce',
				price: 0,
			},
		],
	};

	const rawFeatures = {
		selected: [ 'free' ],
		options: [
			{
				product_slug: 'free',
				title: 'Title',
				price: 0,
			},
			{
				product_slug: 'price',
				title: 'Title',
				price: '$100.00',
			},
			{
				product_slug: 'installed',
				title: 'Title',
				price: 0,
				status: 'installed',
			},
			{
				product_slug: 'woocommerce',
				title: 'WooCommerce',
				price: 0,
			},
		],
	};

	it( 'Features data normalizer', () => {
		const normalizedData = normalizeFeaturesData( rawFeatures );

		expect( normalizedData ).toEqual( expectedFeaturesData );
	} );

	it( 'Setup wizard data normalizer', () => {
		const expectedData = {
			features: expectedFeaturesData,
		};

		const normalizedData = normalizeSetupWizardData( {
			features: rawFeatures,
		} );

		expect( normalizedData ).toEqual( expectedData );
	} );
} );
