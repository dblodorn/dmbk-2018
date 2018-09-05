<?php

define( 'DMBK', 1.0 );
/*-----------------------------------------------------------------------------------*/
/* Theme Setup
/*-----------------------------------------------------------------------------------*/
function remove_admin_bar_links() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('about');            // Remove the about WordPress link
    $wp_admin_bar->remove_menu('wporg');            // Remove the WordPress.org link
    $wp_admin_bar->remove_menu('documentation');    // Remove the WordPress documentation link
    $wp_admin_bar->remove_menu('updates');          // Remove the updates link
    $wp_admin_bar->remove_menu('comments');         // Remove the comments link
    $wp_admin_bar->remove_menu('new-content');      // Remove the content link
    $wp_admin_bar->remove_menu('w3tc');             // If you use w3 total cache remove the performance link
}

add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );

add_action( 'admin_menu', 'my_remove_menu_pages' );

function my_remove_menu_pages() {
  remove_menu_page('edit-comments.php');
}

function my_theme_setup() {
  require_once( 'library/custom-post-type.php' );
  require_once( 'api/api.php');
  add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'my_theme_setup' );

/*-----------------------------------------------------------------------------------*/
/* ACF Add Options Page
/*-----------------------------------------------------------------------------------*/

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page();
  acf_add_options_sub_page('General');
  acf_add_options_sub_page('Header');
  acf_add_options_sub_page('Footer'); 
}

function get_current_template() {
  global $template;
  return basename($template, '.php');
}

function get_current_post() {
  global $post; $post_slug=$post->post_name;;
  return $post_slug;
}

/*-----------------------------------------------------------------------------------*/
/* ALLOW SVG
/*-----------------------------------------------------------------------------------*/

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

/*-----------------------------------------------------------------------------------*/
/* REMOVE EMOJI SHIT
/*-----------------------------------------------------------------------------------*/ 

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/*-----------------------------------------------------------------------------------*/
/* INCLUDE ACF
/*-----------------------------------------------------------------------------------*/ 

function deepIncludeACFFields(&$item, $key, $postTypes, $level=0, $post) {
	if( isset($item->post_type) && in_array($item->post_type, $postTypes) ) {
		$item = get_fields($item->ID);
	}
}

add_filter( 'acf/rest_api/dmbk-sites/get_fields', function( $data, $request, $response ) {
  if ( $response instanceof WP_REST_Response ) {
    $data = $response->get_data();
  }
  array_walk_recursive( $data, 'deepIncludeACFFields', array( ‘websites’ ) );
  return $data;
}, 10, 3 );

