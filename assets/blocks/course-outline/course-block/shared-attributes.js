import { useContext, createContext, useEffect } from '@wordpress/element';
import { omit } from 'lodash';

/**
 * A React context which contains the attributes and the setAttributes callback of the Outline block.
 */
export const SharedModuleAttributesContext = createContext( {
	sharedAttributes: {},
	setSharedAttributes() {},
	removeSharedAttributes() {},
} );

const useSharedAttributesContextProvider = (
	Context,
	key,
	{ attributes, setAttributes }
) => {
	const sharedAttributes = attributes[ key ] || {};
	const setSharedAttributes = ( state ) =>
		setAttributes( {
			[ key ]: { ...( attributes[ key ] || {} ), ...state },
		} );

	const removeSharedAttributes = ( keys ) =>
		setAttributes( {
			[ key ]: omit( attributes[ key ] || {}, keys ),
		} );

	// const Provider = ( { children } ) => (
	// 	<Context.Provider
	// 		value={ {
	// 			sharedAttributes,
	// 			setSharedAttributes,
	// 		} }
	// 	>
	// 		{ children }
	// 	</Context.Provider>
	// );
	return { setSharedAttributes, sharedAttributes, removeSharedAttributes };
};

export const withSharedModuleAttributes = () => ( Component ) => ( props ) => {
	const {
		sharedAttributes,
		setSharedAttributes,
		removeSharedAttributes,
	} = useContext( SharedModuleAttributesContext );

	// useEffect( () => {
	// 	for ( const x of sharedAttributes ) {
	// 	}
	// }, [ attributes, sharedAttributes ] );

	const attributes = { ...props.attributes, ...sharedAttributes };
	const setAttributes = ( change ) => {
		const { own, shared } = Object.keys( change ).reduce(
			( changes, key ) => {
				changes[ key in sharedAttributes ? 'shared' : 'own' ][ key ] =
					change[ key ];
				return changes;
			},
			{ shared: {}, own: {} }
		);

		props.setAttributes( own );
		setSharedAttributes( shared );
	};

	return (
		<Component
			{ ...props }
			{ ...{
				sharedAttributes,
				setSharedAttributes,
				removeSharedAttributes,
			} }
		/>
	);
};

export const useSharedModuleAttributesProvider = ( props ) =>
	useSharedAttributesContextProvider(
		SharedModuleAttributesContext,
		'moduleAttributes',
		props
	);
