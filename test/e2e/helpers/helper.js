'use strict';

/* global describe, beforeEach, afterEach, it, browser, expect, element, by */
require('./waitReady.js');
module.exports = {

  /* Loading an url*/
  getUrl: function(url) {
    browser.driver.get(url);
  },
  /* explicit wait on and element*/
  waitUntilPresent: function(elm, timeout) {
    timeout = timeout || 60000;
    return browser.driver.wait(function() {
      return elm.isPresent().then(function(isPresent) {
        return isPresent;
      });
    }, timeout, 'Error Waiting for element to be present');
  },


};
