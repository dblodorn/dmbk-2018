<?php
  function return_image($image){
    $formatImg = array(
      'large' => $image['sizes']['large'],
      'small' => $image['sizes']['medium'],
      'id' => $image['ID']
    );
    return $formatImg;
  }
  // Need a chill function for returning array of categories
  function return_categories($post_id) {
    $post_categories = wp_get_post_categories( $post_id );
    $cats = array();
    foreach($post_categories as $c){
      $cat = get_category( $c );
      $cats[] = array( 'name' => $cat->name, 'slug' => $cat->slug );
    }
    return $cats;
  }

  function return_taxonomy_array($p, $taxonomy) {
    $taxonomy_return = get_the_terms($p->ID, $taxonomy);
    return wp_list_pluck($taxonomy_return, 'name');
  };

  function return_taxonomy_array_with_slug($p, $taxonomy) {
    $terms = get_the_terms($p->ID, $taxonomy);
    $term_array = array();
    foreach($terms as $term) {
      $term_array[] = array(
        'name' => $term->name,
        'slug' => $term->slug
      );
    }
    return $term_array;
  };

  function return_project_types() {
    $tax = 'project-type';
    $terms = get_the_terms('project-type');
    $term_array = array();
    foreach($terms as $term) {
      $term_array[] = array(
        'name' => $term->name,
        'slug' => $term->slug
      );
    }
    return $term_array;
  };

  function get_terms_by_post_type($taxonomy, $post_type) {
    global $wpdb;
    $query = $wpdb->prepare(
      "SELECT t.*, COUNT(*) from $wpdb->terms AS t
      INNER JOIN $wpdb->term_taxonomy AS tt ON t.term_id = tt.term_id
      INNER JOIN $wpdb->term_relationships AS r ON r.term_taxonomy_id = tt.term_taxonomy_id
      INNER JOIN $wpdb->posts AS p ON p.ID = r.object_id
      WHERE p.post_type IN('%s') AND tt.taxonomy IN('%s')
      GROUP BY t.term_id",
      $post_type,
      $taxonomy
    );
    $results = $wpdb->get_results($query);
    return $results;
  }


  function basic_gallery($field){
    $images = get_field($field, $p->ID);
    if ( $images ) {
      foreach ($images as $image) {
        $img = array(
          'image' => return_image($image)
        );
        $imgArray[] = $img;
      }
      return $imgArray;
    } else {
      return false;
    }
  }

  function returnGallery($has, $gallery) {
    $has_gallery = get_sub_field($has);
    if ($has_gallery) {
      return basic_gallery($gallery);
    } else {
      return $has_gallery;
    }
  }

  function returnVideo($has, $video) {
    $has_video = get_sub_field($has);
    if ($has_video) {
      return get_sub_field($video);
    } else {
      return $has_video;
    }
  }

  function get_project_content($p, $repeater){
    if(get_field($repeater, $p->ID)):
    $project_data = array();
    while(has_sub_field($repeater)):
      $project_thumb = get_sub_field('project_image');
      $project_data[] = array(
        'title' => get_sub_field('title'),
        'description' => get_sub_field('description'),
        'project_image' => return_image($project_thumb),
        'image_gallery' => returnGallery('add_image_gallery', 'project_image_gallery'),
        'video' => returnVideo('add_video', 'project_video'),
      );
    endwhile;
    endif;
    return $project_data;
  }

  function all_project_data($post, $p) {
    $feature_thumbnail = get_field('project_thumbnail', $p->ID);
    return array(
      'id' => $post->ID,
      'slug' => $post->post_name,
      'title' => $post->post_title,
      'description' => get_field('project_description', $p->ID),
      'images' => basic_gallery('image_gallery')
    );
  }
