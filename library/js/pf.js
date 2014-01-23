jQuery( document ).ready(function() {
  jQuery('.sidebar .menu').affix({
    offset: {
      top: 0,
      bottom: function () {
        return (this.bottom = jQuery('#widget-footer').outerHeight(true)+30)
      }
    }
  });
  // Remove '/widgets/' from the Widgets link hrefs if on the Widgets page so scrollspy works
  jQuery('.current-menu-item > a[href*="/widgets"] + ul a[href*="#"]').each(function () {
    jQuery(this).attr('href', function(i, val) {
      return val.replace('/widgets/', '')
    });
  });
  // Remove '.current-menu-item' from Widgets subnav items so the arrow only shows when activated by scrollspy
  jQuery('.current-menu-item > a[href*="/widgets"] + ul li').each(function () {
    jQuery(this).removeClass('current-menu-item');
  });
  // Enable scrollspy on sidebar nav
  // Add the necessary class to the menu
  jQuery(".menu-primary-container ul").addClass("nav");
  // And attach scrollspy
  jQuery('body').scrollspy({ target: '.menu-primary-container', offset: 100 });
});