<?php
/**
 * Plugin Name:       Codingduluaja Bundle Plugin
 * Description:       Paket Plugin Codingduluaja.com
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

function cda_block_cda_block_block_init() {
	register_block_type( __DIR__ . '/build/cda-header' );
	register_block_type( __DIR__ . '/build/cda-loc' );
	register_block_type( __DIR__ . '/build/cda-description' );
	register_block_type( __DIR__ . '/build/cda-code' );
}
add_action( 'init', 'cda_block_cda_block_block_init' );

function resister_cda_meta_description() {
    $args = array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    );
    register_post_meta( 'post', 'cda_meta_description', $args);
    register_post_meta( 'page', 'cda_meta_description', $args);
}
add_action( 'init', 'resister_cda_meta_description' );

function resister_cda_meta_index() {
    $args = array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean',
		'default' => true,
    );
    register_post_meta( 'post', 'cda_meta_index', $args);
    register_post_meta( 'page', 'cda_meta_index', $args);
}
add_action( 'init', 'resister_cda_meta_index' );

function cda_override_robots_filter(array $robots) {
    // var_dump( $args);
    if(is_home()) {
        $robots['noindex'] = true;
    } else if(is_single() || is_page()) {
        global $post;
        $isIndexed = get_post_meta($post->ID, 'cda_meta_index', true);
        if(is_null($post) || !$isIndexed) {
            $robots['noindex'] = true;
        }
        return $robots;
    } else if(is_archive() || is_category() || is_search() || is_404() || is_tag()){
        $robots['noindex'] = true;
    }
    return $robots;
}
add_filter('wp_robots', 'cda_override_robots_filter');

function cda_meta_description_wp_head() {
    if(is_home() || is_archive() || is_category() || is_search()) {
        echo "<meta name='description' content='" . esc_attr( get_bloginfo('description') ) . "' />\n";
    } else if(is_single()) {
        global $post;
        $desc = get_post_meta($post->ID, 'cda_meta_description', true);
        echo "<meta name='description' content='" . esc_attr( $desc ) . "' />\n";
    }
}
add_action('wp_head', 'cda_meta_description_wp_head');

function cda_meta_og_wp_head() {
    /**
     * <meta property="og:title" content="The Rock" />
     * <meta property="og:description" content="The Rock" />
     * <meta property="og:locale" content="id_ID" />
     * <meta property="og:type" content="website" />
     * <meta property="og:site_name" content="website" />
     * <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
     * <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
     * <meta property="article:published_time " content="ISO 8601" />
     * <meta property="article:modified_time " content="ISO 8601" />
     * <meta property="article:author " content="ISO 8601" />
     * <meta property="article:tag " content="array" />
     * <meta property="article:tag " content="array" />
     * <meta property="article:tag " content="array" />
     * <meta property="article:tag " content="array" />
     */
    if(is_home() || is_archive() || is_category() || is_search()) {
        echo "<meta property='og:title' content='" . esc_attr( get_bloginfo('name') ) . "' />\n";
        echo "<meta property='og:description' content='" . esc_attr( get_bloginfo('description') ) . "' />\n";
        echo "<meta property='og:locale' content='" . esc_attr( get_locale() ) . "' />\n";
        echo "<meta property='og:type' content='website' />\n";
        echo "<meta property='og:site_name' content='" . esc_attr( get_bloginfo('name') ) . "' />\n";
        echo "<meta property='og:url' content='" . esc_attr( get_bloginfo('url') ) . "' />\n";
    } else if(is_single()) {
        global $post;
        $desc = get_post_meta($post->ID, 'cda_meta_description', true);
        echo "<meta property='og:title' content='" . esc_attr( get_the_title() ) . "' />\n";
        echo "<meta property='og:description' content='" . esc_attr( $desc ) . "' />\n";
        echo "<meta property='og:locale' content='" . esc_attr( get_locale() ) . "' />\n";
        echo "<meta property='og:type' content='website' />\n";
        echo "<meta property='og:site_name' content='" . esc_attr( get_bloginfo('name') ) . "' />\n";
        echo "<meta property='og:url' content='" . esc_attr( get_permalink( $post->ID ) ) . "' />\n";
    }
}
add_action('wp_head', 'cda_meta_og_wp_head');




