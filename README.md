# Patternfly theme based on WP-Bootstrap

Bootstrap (http://twitter.github.io/bootstrap) in Wordpress theme form. Using Eddie Machado's Bones for a starting point (https://github.com/eddiemachado/bones). 

## Features

We’ve built the WP-Bootstrap theme so that it could be used as-is or as a starting point for theme developers. It’s built on top of the brilliant Bones theme framework by Eddie Machado and based on v2.3.1 of Bootstrap.

Star this project on Github to keep up with its progress.

### Responsive

We stick as closely as possible to bootstrap so this thing is natually responsive. 

### Page Templates

We’ve packaged four different page templates into this theme.

    - Homepage template (seen on the homepage of this site)
    - Standard page with right sidebar (this page)
    - Page with left sidebar
    - Full width page

### Theme Options Panel

Want to change some colors? Want the top nav to scroll with the content? Hide the search box in the top nav? Do it in the options panel.

### Shortcodes

We’ve built in some shortcodes so you can easily add UI elements found in Twitter Bootstrap.

### Sidebars

We’ve built in two different sidebars. One for the homepage and one for the other pages. Add widgets to them.

## Development

Development setup requires nodejs. If you do not already have nodejs and npm installed on your system, please see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager for how to install on your distribution.

### Install Bower Components

After ensuring nodejs and npm are available, install [Bower](http://bower.io/) globally:

    npm install -g bower

Now that Bower is available, we can install the required development components:

    bower install

At this point, you should now have a top level components/ folder with all dependencies listed in the bower.json file installed.

### Install Development Dependencies

The development includes the use of a number of helpful tasks. In order to setup your development environment to allow running of these tasks, you need to install the local nodejs packages declared in `package.json`. To do this run:

    npm install

This will install all necessary development packages into `node_modules/`. At this point, the gruntjs tasks are available for use such as starting a local development server or building the master CSS file.

## Build

### CSS

In development, styling is written and managed through multiple lesscss files. In order to generate a CSS file of all styling, run the build Gruntjs task:

    grunt build

This task will compile and minify the lesscss files into a single CSS file located at `library/css/bootstrap-custom.min.css`.
