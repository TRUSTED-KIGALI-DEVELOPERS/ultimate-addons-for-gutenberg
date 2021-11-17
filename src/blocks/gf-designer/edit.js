import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { __ } from '@wordpress/i18n';
import { SelectControl, Placeholder } from '@wordpress/components';
import jQuery from 'jquery';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/gf-styler/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/gf-styler/render" */ './render' )
);
import { withSelect } from '@wordpress/data';

const UAGBGF = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { isHtml: false } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-gf-styler-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			msgVrPadding,
			msgHrPadding,
			buttonVrPadding,
			buttonHrPadding,
			fieldVrPadding,
			fieldHrPadding,
			buttontopPadding,
			buttonrightPadding,
			buttonbottomPadding,
			buttonleftPadding,
			fieldtopPadding,
			fieldrightPadding,
			fieldbottomPadding,
			fieldleftPadding,
			msgtopPadding,
			msgrightPadding,
			msgbottomPadding,
			msgleftPadding,
		} = props.attributes;

		if ( buttonVrPadding ) {
			if ( undefined === buttontopPadding ) {
				props.setAttributes( { buttontopPadding: buttonVrPadding } );
			}
			if ( undefined === buttonbottomPadding ) {
				props.setAttributes( { buttonbottomPadding: buttonVrPadding } );
			}
		}

		if ( buttonHrPadding ) {
			if ( undefined === buttonrightPadding ) {
				props.setAttributes( { buttonrightPadding: buttonHrPadding } );
			}
			if ( undefined === buttonleftPadding ) {
				props.setAttributes( { buttonleftPadding: buttonHrPadding } );
			}
		}

		if ( msgVrPadding ) {
			if ( ! msgtopPadding ) {
				props.setAttributes( { msgtopPadding: msgVrPadding } );
			}
			if ( ! msgbottomPadding ) {
				props.setAttributes( { msgbottomPadding: msgVrPadding } );
			}
		}

		if ( msgHrPadding ) {
			if ( ! msgrightPadding ) {
				props.setAttributes( { msgrightPadding: msgHrPadding } );
			}
			if ( ! msgleftPadding ) {
				props.setAttributes( { msgleftPadding: msgHrPadding } );
			}
		}

		if ( fieldVrPadding ) {
			if ( undefined === fieldtopPadding ) {
				props.setAttributes( { fieldtopPadding: fieldVrPadding } );
			}
			if ( undefined === fieldbottomPadding ) {
				props.setAttributes( { fieldbottomPadding: fieldVrPadding } );
			}
		}

		if ( fieldHrPadding ) {
			if ( undefined === fieldrightPadding ) {
				props.setAttributes( { fieldrightPadding: fieldHrPadding } );
			}
			if ( undefined === fieldleftPadding ) {
				props.setAttributes( { fieldleftPadding: fieldHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		jQuery( '.wpgf-submit' ).click( function ( event ) {
			event.preventDefault();
		} );

		const element = document.getElementById(
			'uagb-gf-styler-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	const { formId } = props.attributes;
	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = ( id ) => {
		const { setAttributes } = props;

		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}

		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};
	if ( formId === 0 ) {
		return (
			<Placeholder
				icon="admin-post"
				label={ __(
					'Select a Gravity Form',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<SelectControl
					value={ formId }
					onChange={ onSelectForm }
					options={ uagb_blocks_info.gf_forms }
				/>
			</Placeholder>
		);
	}
	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( ( select, props ) => {
	const { setAttributes } = props;
	const { formId, isHtml } = props.attributes;
	let jsonData = '';

	if ( formId && -1 !== formId && 0 !== formId && ! isHtml ) {
		jQuery.ajax( {
			url: uagb_blocks_info.ajax_url,
			data: {
				action: 'uagb_gf_shortcode',
				formId,
				nonce: uagb_blocks_info.uagb_ajax_nonce,
			},
			dataType: 'json',
			type: 'POST',
			success( data ) {
				setAttributes( { isHtml: true } );
				setAttributes( { formJson: data } );
				jsonData = data;
			},
		} );
	}

	return {
		formHTML: jsonData,
	};
} )( UAGBGF );
