require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'jquery'], function (app, $) {
  'use strict';

  app.wordSwap(headertagline);
  app.consoleSwag();
});