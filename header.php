<!doctype html>
<!--[if IE 9]><html <?php language_attributes(); ?> class="ie9 no-js"><![endif]-->
<!--[if gt IE 9><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/favicon.ico">
    <!-- iPad retina icon -->
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-152.png">
    <!-- iPad retina icon (iOS < 7) -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-144.png">
    <!-- iPad non-retina icon -->
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-76.png">
    <!-- iPad non-retina icon (iOS < 7) -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-72.png">
    <!-- iPhone 6 Plus icon -->
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-180.png">
    <!-- iPhone retina icon (iOS < 7) -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-114.png">
    <!-- iPhone non-retina icon (iOS < 7) -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo get_template_directory_uri();?>/library/components/patternfly/dist/img/apple-touch-icon-precomposed-57.png">
    <!-- wordpress head functions -->
    <?php wp_head(); ?>
    <!-- end of wordpress head -->
    <!-- theme options from options panel -->
    <?php get_wpbs_theme_options(); ?>
    <!-- typeahead plugin - if top nav search bar enabled -->
    <?php require_once('library/typeahead.php'); ?>
  </head>
  <body <?php body_class(); ?>>
    <header role="banner">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" id="logo" title="<?php echo get_bloginfo('description'); ?>
              " href="
              <?php echo home_url(); ?>
              ">
              <?php if(of_get_option('navbar-branding_logo','')!='') { ?>
              <img src="<?php echo of_get_option('navbar-branding_logo'); ?>
              " alt="
              <?php echo get_bloginfo('description'); ?>
              ">
              <?php }
                  if(of_get_option('site_name','1')) bloginfo('name'); ?></a>
          </div><!-- end .navbar-header -->
          <div class="navbar-collapse collapse">
            <?php if(of_get_option('search_bar', '1')) {?>
            <form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
              <div class="form-group">
                <input name="s" id="s" type="text" class="form-control" autocomplete="off" placeholder="<?php _e('Search','bonestheme'); ?>
                " data-provide="typeahead" data-items="4" data-source='
                <?php echo $typeahead_data; ?>
                '>
                <button type="submit" class="btn btn-default">Submit</button>
              </div><!-- end .form-group -->
            </form>
            <?php } ?>
            <?php bones_main_nav(); // Adjust using Menus in Wordpress Admin ?>
          </div><!-- end .navbar-collapse -->
        </div><!-- end .container -->
      </nav> <!-- end .navbar -->
    </header> <!-- end header -->