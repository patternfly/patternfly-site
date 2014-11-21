    <footer role="contentinfo" class="container" id="widget-footer">
      <hr />
      <div class="row">
        <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer1') ) : ?>
        <?php endif; ?>
        <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer2') ) : ?>
        <?php endif; ?>
      </div>
    </footer> <!-- end footer -->
    <?php wp_footer(); // js scripts are inserted using this function ?>
  </body>
</html>