<?php
  function return_footer_links() {
    $data = array();
    if ( have_rows( 'footer_links', 'option' ) ) :
      while ( have_rows( 'footer_links', 'option' ) ) : the_row();
        $data[] = array(
          'link_title' => get_sub_field('link_title'),
          'link_url' => get_sub_field('link_url')
        );
      endwhile;
    endif;
    return $data;
  }
  
  function options_data(){
    return array(
      'intro' => get_field('intro', 'option'),
      'footer_links' => return_footer_links(),
    );
  }
?>
