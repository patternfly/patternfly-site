jQuery( document ).ready(function() {
  // Initialize Google Code Prettify
  prettyPrint();
  // Initialize Bootstrap Combobox
  jQuery('.combobox').combobox();
  // Initialize Bootstrap-datepicker
  jQuery('.bootstrap-datepicker, .input-group.date').datepicker({
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true
  });
  // Initialize Data Tables
  jQuery('.datatable').dataTable();
  // Initialize Popovers
  jQuery('[data-toggle=popover]').popovers();
 // Initialize Tooltip
  jQuery('.tooltip-demo').tooltip({
    selector: "[data-toggle=tooltip]",
    container: "body"
  });
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
  (function sidebar() {
    // Test to see if viewport is 768px or greater and...
    if (matchMedia('(min-width: 768px)').matches) {
      // Balance the columns so that weird affixing behavior doesn't occur when #main is shorter than #sidebar1
      jQuery('#main, #sidebar1').matchHeight({
          property: 'min-height'
      });
      // Affix the sidebar menu and show it--menu is hidden initally to avoid a flash of the expanded scrollspy
      jQuery('.sidebar .menu').affix({
        offset: {
          top: 0,
          bottom: function () {
            return (this.bottom = jQuery('#widget-footer').outerHeight(true)+30)
          }
        }
      }).show();
    } else {
      // show the sidebar menu
      jQuery('.sidebar .menu').show();
    }
  })();
  // Enable scrollspy on sidebar nav
  // Add the necessary class to the menu
  jQuery(".menu-primary-container ul").addClass("nav");
  // And attach scrollspy
  jQuery('body').scrollspy({ target: '.menu-primary-container', offset: 100 });
  // refresh the scrollspy when opening/closing collapses
  jQuery('.collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
    jQuery('body').scrollspy('refresh');
  });
  // Prevent the default behavior of <a>s in .pf-examples on /widgets
  jQuery(".pf-example a").click(function( event ) {
    event.preventDefault();
  });
});
