<?php
/**
 * Plugin Name:       Box
 * Description:       Box layout primitive
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Frank Wazeter
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wf-box
 *
 * @package           box
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function box_wf_box_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'box_wf_box_block_init' );

function register_custom_elements() {
	$assets_dir = plugin_dir_url(__FILE__) . 'src/';

	$modules = array(
		'wf-box'    => 'box.js',
	);

	foreach ( $modules as $handle => $rel_path ) {
		wp_register_script( $handle, $assets_dir . $rel_path, array(), '0.1.0' );
		wp_script_add_data( $handle, 'type', 'module' );
	}
}
add_action( 'wp_enqueue_scripts', 'register_custom_elements' );
// enable our copmonent to wp_kses

function add_wf_box_to_kses_allowed( $allowed_tags ) {
	$allowed_tags['wf-box'] = array();
}
add_filter('wp_kses_allowed_html', 'add_wf_box_to_kses_allowed');
