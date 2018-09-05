<?php
  // WEBSITE PROJECTS
  function all_web_projects(){
    $args = array(
      'post_type' => 'website',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = all_project_data($post, $p);
      endwhile;
    endif;
    return $data;
  }
  
?>