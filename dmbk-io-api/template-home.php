<?php /* Template Name: Home */ ?>

<?php get_header(); ?>

<?php if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();
    include locate_template('includes/home-content.php');
  ?>
<?php }} ?>

<?php get_footer(); ?>
