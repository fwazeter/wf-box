/**
 * External dependencies
 */
// utility for joining classes together.
import classnames from 'classnames';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes } ) {

	// for now, just pulling the "top" part here.
	const paddingValue =  attributes.padding;
	const invert = attributes.invert;

	// in classnames module, 'invert' is short for { invert: true }
	const classes = classnames(
		{
			'invert': invert
		}
	);

	return (
		<wf-box {...useBlockProps.save( {
			className: classes
			} ) }
			padding={paddingValue}
			>
			<InnerBlocks.Content />
		</wf-box>
	);
}
