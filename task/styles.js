'use strict';
module.exports = function() { // eslint-disable-line func-names
  // Global variables
  const gulp    = this.gulp,
        plugins = this.opts.plugins,
        config  = this.opts.configs,
        themes  = plugins.getThemes();

  // Generate all necessary symlinks before styles compilation
  this.opts.plugins.runSequence('inheritance');

  // Loop through themes to compile scss or less depending on your config.json
  themes.forEach(name => {
    require('../helper/' + config.themes[name].lang)(gulp, plugins, config, name)();
  });
};
