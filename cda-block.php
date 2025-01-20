<?php
/**
 * Plugin Name:       Simple Code Highlighter
 * Description:       Simple Code Highlighter by Codingduluaja.com
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Budiyono
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cda-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function cda_block_init() {
	register_block_type( __DIR__ . '/build/cda-code' );
}
add_action( 'init', 'cda_block_init' );




