<?php
global $blog_id, $wp_query, $wiki, $post, $current_user;
get_header( 'wiki' );
?>
<div class="container" id="overview">
  <div id="content" class="clearfix row">
    <div id="main" class="col-sm-9 col-md-9 col-lg-9 clearfix" role="main">
      <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
        <header>
          <div class="page-header">
            <h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
          </div>
        </header> <!-- end article header -->
        <section class="post_content clearfix" itemprop="articleBody">
          <div class="incsub_wiki incsub_wiki_single">
            <?php _e('The page you are looking for does not exist. Feel free to create it yourself.', $wiki->translation_domain); ?>
          </div>
          <?php
            echo $wiki->get_new_wiki_form(false);
          ?>
        </section> <!-- end article section -->
        <footer>
          <?php the_tags('<p class="tags"><span class="tags-title">' . __("Tags","bonestheme") . ':</span> ', ', ', '</p>'); ?>
        </footer> <!-- end article footer -->
      </article> <!-- end article -->
    </div> <!-- end #main -->
    <?php get_sidebar('wiki'); // sidebar 1 ?>
  </div> <!-- end #content -->
</div> <!-- end #overiew -->
<?php get_footer('wiki'); ?>
