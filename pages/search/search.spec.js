var helper = require('../../helper');
var faker = require('faker');

describe('Cart page', function() {

    beforeEach(function () {
        browser.get(browser.params.url);
        browser.window.manage().maximize();
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    });

    it('should search for vinyl item', function() {

       var searchField = element(by.id('search-query'));
       var searchButton = element(by.linkText('Search'));
       var searchItem = element(by.xpath("/html/body/div[6]/div/div/div/div/div[2]/div[2]/div[3]/ul/li[5]"));

       searchField.sendKeys('Vinyl');
       searchButton.click();
       helper.waitUntilReady(searchItem);
       searchItem.click();
    });

});