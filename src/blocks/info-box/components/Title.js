const {
	RichText,
} = wp.blockEditor

const {
	createBlock
} = wp.blocks

import { __ } from '@wordpress/i18n';

class Title extends React.Component {

	render() {

		//const { attributes, setAttributes , props } = this.props;
		const {
			attributes,
			setAttributes ,
			props
		} = this.props

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName= { attributes.headingTag }
	                placeholder={ __( "Write a Heading" ) }
	                value={ attributes.infoBoxTitle }
	                className = 'uagb-ifb-title'
	                onChange = { ( value ) => setAttributes( { infoBoxTitle: value } ) }
	                multiline={ false }
	                onMerge = { props.mergeBlocks }
	                onSplit = {
						props.insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								props.insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => props.onReplace( [] ) }
	            />
			)
		}else{
			return (
				<RichText.Content
	                tagName= { attributes.headingTag }
	                value={ attributes.infoBoxTitle }
	                className='uagb-ifb-title'
	            />
			)
		}
	}
}

export default Title
