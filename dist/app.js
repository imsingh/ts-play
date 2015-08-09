System.register('app', ['./logger'], function (_export) {
  'use strict';

  var Logger, logger;
  return {
    setters: [function (_logger) {
      Logger = _logger.Logger;
    }],
    execute: function () {
      logger = new Logger();

      logger.log('It\'s Inder here');
    }
  };
});