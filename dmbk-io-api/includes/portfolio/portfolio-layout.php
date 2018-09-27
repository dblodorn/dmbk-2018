<?php 
  include locate_template('includes/portfolio/portfolio-intro.php'); 
  if( have_rows('portfolio_layout') ) :
    while ( have_rows('portfolio_layout') ) : the_row(); 
      if( get_row_layout() == 'intro_block' ) :  
        include locate_template('includes/portfolio/portfolio-intro-block.php'); 
      endif;
      if( get_row_layout() == 'portfolio_repeater' ) :  
        include locate_template('includes/portfolio/portfolio-items.php'); 
      endif;
    endwhile;
  endif;
?>