/**
 * BLOCK: Info Box - Edit Class
 */
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import InfoBoxStyle from './inline-styles';

import { withSelect } from '@wordpress/data';

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/render" */ './render' )
);
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/settings" */ './settings' )
);

const UAGBInfoBox = ( props ) => {
	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-info-box-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
		} = props.attributes;

		if ( ctaBtnVertPadding ) {
			if ( ! paddingBtnTop ) {
				setAttributes( { paddingBtnTop: ctaBtnVertPadding } );
			}
			if ( ! paddingBtnBottom ) {
				setAttributes( { paddingBtnBottom: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( ! paddingBtnRight ) {
				setAttributes( { paddingBtnRight: ctaBtnHrPadding } );
			}
			if ( ! paddingBtnLeft ) {
				setAttributes( { paddingBtnLeft: ctaBtnHrPadding } );
			}
		}

		// UAG Paste Styles Event.
		document.addEventListener( 'uag-paste-custom-event-info-box', function( event ) {
			if ( event.detail ) {
				setAttributes(event.detail);
			}
		} );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-info-box-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = InfoBoxStyle( props );
		}
	}, [ props ] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBInfoBox );
