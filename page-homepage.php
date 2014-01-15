<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>

<div id="content" class="clearfix row">

  <div id="main" class="col-md-12 clearfix" role="main">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <?php the_content(); ?>

    <?php endwhile; endif; ?>

  </div><!-- end #main -->

</div><!-- end #content -->

<?php get_footer(); ?>