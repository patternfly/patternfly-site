jQuery( document ).ready(function() {
  // Remove '.current-menu-parent' and '.current-menu-item' from primary nav Widgets subnav items so the indicator never shows
  jQuery('#menu-primary .current-menu-item > a[href*="/widgets"] + ul li').each(function () {
    jQuery(this).removeClass('current-menu-parent').removeClass('current-menu-item');
  });
  // Remove '.current-menu-item' from sidebar Widgets subnav items so the arrow only shows when activated by scrollspy
  jQuery('.sidebar .current-menu-item > a[href*="/widgets"] + ul li').each(function () {
    jQuery(this).removeClass('current-menu-item');
  });
  // Hide nested '.subnav-menu's in sidebar on the Widgets page so they get activated by the scrollspy
  jQuery('.sidebar .current-menu-item > a[href*="/widgets"] + .sub-menu .sub-menu').hide();
  // Remove '/widgets/' from the Widgets link hrefs if on the Widgets page so scrollspy works
  jQuery('.current-menu-item > a[href*="/widgets"] + ul a[href*="#"]').each(function () {
    jQuery(this).attr('href', function(i, val) {
      return val.replace('/widgets/', '')
    });
  });
  // Enable scrollspy on sidebar nav
  // Add the necessary class to the menu
  jQuery(".menu-primary-container ul").addClass("nav");
  // And attach scrollspy
  jQuery('body').scrollspy({ target: '.menu-primary-container', offset: 100 });
  // Affix the sidebar menu
  jQuery('.sidebar .menu').affix({
    offset: {
      top: 0,
      bottom: function () {
        return (this.bottom = jQuery('#widget-footer').outerHeight(true)+30)
      }
    }
  });
});