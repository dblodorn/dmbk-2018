<?php
  function acf_gallery($field, $post_id){
    $imgArray = array();
    $images = get_field($field, $post_id);
    if ( $images ) {
      foreach ($images as $image) {
        $img = array(
          'image_data' => return_image($image)
        );
        $imgArray[] = $img;
      }
      return $imgArray;
    } else {
      return false;
    }
  }
