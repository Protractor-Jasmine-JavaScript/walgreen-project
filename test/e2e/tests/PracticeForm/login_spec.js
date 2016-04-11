'use strict';
/*global describe, beforeEach, it, inject, expect, spyOn, testMocks, browser, element, by, protractor */

var walgreen_url = browser.params.url.wallgreenLandingPage;
var LandingPage = require('../../pages/landing_page.js');
var helper = require('../../helpers/helper.js');
require('../../helpers/waitReady.js');

describe('Gap Landing Page', function() {
  var landingPage;

  beforeEach(function() {
    landingPage = new LandingPage();
    helper.getUrl(walgreen_url);
  });

  describe('Login validation', function() {

    it('Should be able to see "your account" text', function() {
        expect(browser.isElementPresent(landingPage.yourAcount_text)).toBeTruthy();
    });

  });
});
