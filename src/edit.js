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
import { InnerBlocks, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();
	const { invert } = attributes;

	// in classnames module, 'invert' is short for { invert: true }
	const classes = classnames(
		{
			'invert': invert
		}
	);

	const isInvertedColor = invert ? 'wp-block-wazframe-box invert' : 'wp-block-wazframe-box';

	return (
		<div {...blockProps } className={ classnames( classes, blockProps.className ) } >
			{
				<BlockControls>
					<Toolbar>
						<ToolbarButton
							icon={ 'admin-customizer' }
							label={ __('Invert Colors') }
							onClick={ () => setAttributes({ invert: ! invert }) }
						/>
					</Toolbar>
				</BlockControls>
			}
			<InnerBlocks />
		</div>
	);
}
