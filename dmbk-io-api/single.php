<?php $introtitle = get_field('intro_title'); ?><?php $introcopy = get_field('intro_copy'); ?><?php $intro = get_field('intro', 'option'); ?><?php $resume = get_field('resume'); ?><?php get_header(); ?>
<main role="main">
  <header>
    <div class="c2">
      <h1><?php bloginfo('name') ?>
      </h1>
    </div>
    <div class="c2 text-right"><a href="https://dain.kim" target="_blank">https://dain.kim</a></div>
  </header>
  <section id="intro">
    <article><?php if ( get_field('intro_title')) : ?>
      <h2><?php echo ($introtitle) ?>
      </h2><?php else : ?>
      <h2>Hello</h2><?php endif; ?><?php if ( get_field('intro_copy')) : ?><?php echo ($introcopy) ?><?php else : ?><?php echo ($intro) ?><?php endif; ?><?php if ( get_field('resume')) : ?><a href="<?php echo $resume['url'] ?>" target="_blank">📄 Download CV</a><?php endif; ?>
    </article>
  </section><?php if( have_rows('portfolio_layout') ) : ?><?php while ( have_rows('portfolio_layout') ) : the_row(); ?><?php if( get_row_layout() == 'intro_block' ) :  ?>
  <section id="intro-block">
    <article>
      <h3><?php the_sub_field('intro_block_header'); ?>
      </h3><?php the_sub_field('intro_block_copy'); ?>
    </article>
  </section><?php endif ?><?php if( get_row_layout() == 'portfolio_repeater' ) :  ?>
  <section id="portfolio-items">
    <ul class="projects"><?php if(get_field('portfolio_items')) : ?><?php while(the_repeater_field('portfolio_items')) : ?><?php $post_object = get_sub_field('portfolio_item'); ?><?php if( $post_object ) : ?><?php $post = $post_object; setup_postdata( $post ); ?>
      <li class="project">
        <article><?php $proj_image = get_field('project_photo') ?>
          <div style="background-image: url('<?php echo $proj_image['url']; ?>');" class="proj-image"></div>
          <div class="proj-description">
            <div class="proj-copy">
              <h3><?php the_title(); ?>
              </h3><?php the_field('project_description'); ?>
              <ul class="project-links"><?php if(get_field('project_links')) : ?>
                <li class="project-link">
                  <ul></ul><?php while(the_repeater_field('project_links')) : ?>
                  <li><a href="<?php the_sub_field('project_link'); ?>" target="_blank" class="out-link"> <?php the_sub_field('project_link_copy'); ?>&nbsp;🔗</a></li><?php endwhile ?>
                </li><?php endif ?><?php if(get_field('gallery')) : ?><?php $images = get_field('gallery'); ?>
                <li class="project-link">
                  <div class="popup-gallery"><?php foreach($images as $image) : ?><a href="<?php echo $image['url']; ?>" class="out-link popup">VIEW IMAGES&nbsp;🖼</a><?php endforeach ?>
                  </div>
                </li><?php endif ?><?php if(get_field('more_information')) : ?>
                <li class="project-link"><a href="<?php the_permalink(); ?>" class="out-link">MORE INFORMATION&nbsp;💡</a></li><?php endif ?>
              </ul>
            </div>
          </div>
        </article>
      </li><?php wp_reset_postdata(); ?><?php endif; ?><?php endwhile ?><?php endif ?>
    </ul>
  </section><?php endif ?><?php endwhile ?><?php else : ?><?php endif ?>
</main><?php get_footer(); ?>