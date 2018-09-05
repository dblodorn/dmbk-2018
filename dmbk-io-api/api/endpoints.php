<?php
  function main_data(){
    $data = array();
    $data['options'] = options_data();
    $data['projects'] = array(
      'web' => all_web_projects(),
      'art' => all_art_projects(),
      'design' => all_design_projects(),
    );
    return $data;
  }
  function api_setup_endpoints() {
    $namespace = 'dmbk-io-api/v1';
    register_rest_route( $namespace, '/core/', array(
      'methods' => 'GET',
      'callback' => 'main_data'
    ));
  }
add_action( 'rest_api_init', 'api_setup_endpoints' );
