'use strict';

var LandingPage = function() {
  this.yourAcount_text = $("#wag-arrowinfo");


  this.login = function(username, password) {
    this.username.sendKeys(username);
    this.password.sendKeys(password);
    this.loginButton.click();
  };

};

module.exports = LandingPage;
