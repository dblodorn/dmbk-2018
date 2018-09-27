<section id="portfolio-items">
  <ul class="projects">
    <?php $projects = get_sub_field( 'projects' ); ?>
    <?php if ( $projects ): ?>
      <?php foreach ( $projects as $post ):  ?>
        <?php setup_postdata ( $post ); ?>
        <li class="project">
          <article>
            <?php $proj_image = get_field('project_photo') ?>
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
        </li>
      <?php endforeach; ?>
    <?php wp_reset_postdata(); ?>
    <?php endif; ?>
  </ul>
</section>