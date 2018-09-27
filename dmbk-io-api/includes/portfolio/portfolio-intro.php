<?php $introtitle = get_field('intro_title'); ?>
<?php $introcopy = get_field('intro_copy'); ?>
<?php $intro = get_field('intro', 'option'); ?>
<?php $resume = get_field('resume'); ?>

<section id="intro">
  <article>
    <?php if ( get_field('intro_title')) : ?>
    <h2>
      <?php echo ($introtitle) ?>
    </h2>
    <?php else : ?>
    <h2>Hello</h2>
    <?php endif; ?>
      <?php if ( get_field('intro_copy')) : ?><?php echo ($introcopy) ?><?php else : ?><?php echo ($intro) ?><?php endif; ?><?php if ( get_field('resume')) : ?><a href="<?php echo $resume['url'] ?>" target="_blank">📄 Download CV</a><?php endif; ?>
  </article>
</section>