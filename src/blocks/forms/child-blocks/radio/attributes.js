/**
 * BLOCK: UAGB Form - Radio Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
    },
    radioName:{
        type: "string",
        default: __( "RadioBox Title" , 'ultimate-addons-for-gutenberg' )
    },
	radioRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" , 'ultimate-addons-for-gutenberg'),"optionvalue": __( "Option Value 1" , 'ultimate-addons-for-gutenberg') }],
        
    },
    
}
export default attributes