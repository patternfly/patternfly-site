# PatternFly site Wordpress theme based on [WP-Bootstrap](https://github.com/320press/wordpress-bootstrap/)

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
