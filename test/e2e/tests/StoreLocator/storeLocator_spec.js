'use strict';
/*global describe, beforeEach, it, inject, expect, spyOn, testMocks, browser, element, by, protractor */

var walgreen_url = browser.params.url.wallgreenLandingPage;

/* Pages */
var FooterPage = require('../../pages/footer_page.js');
var StoreLocatorPage = require('../../pages/store_locator_page.js');
var LandingPage = require('../../pages/landing_page.js');

/* Helpers */
var helper = require('../../helpers/helper.js');
require('../../helpers/waitReady.js');

fdescribe('Walgreen: ', function() {
  var landingPage;
  var storeLocatorPage;
  var footerPage;

  beforeEach(function() {
    footerPage = new FooterPage();
    landingPage = new LandingPage();
    storeLocatorPage = new StoreLocatorPage();
    helper.getUrl(walgreen_url);
    footerPage.storeLocator_link.waitReady();
    footerPage.storeLocator_link.click();
  });

  describe('Feature: Store Locator', function() {

    xit('Should be able go the store locator page', function() {
      expect(browser.isElementPresent(storeLocatorPage.browseByState_text)).toBeTruthy();
    });

    it('Should be able see search result box open', function() {
        expect(browser.isElementPresent(storeLocatorPage.result_box)).toBeTruthy();
    });

    it('Should be able see search result box open', function() {
      var myelm = element.all(by.repeater('results in storeLocatorSearchresults.results')).first().all(by.css('.m0.wag-stores-text.wag-line-height.ng-binding'));
      var myelm2 = element.all(by.repeater('results in storeLocatorSearchresults.results')).first().all(by.css('.wag-store-box.ng-scope'));

      myelm2.getText().then(function(text){
        console.log(text);
      });
      browser.sleep(5000);
      expect(browser.isElementPresent(storeLocatorPage.result_box)).toBeTruthy();
    });

  });
});
