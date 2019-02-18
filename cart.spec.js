var helper = require('./helper');
var faker = require('faker');

describe('Cart page', function() {

    beforeEach(function () {
        browser.get(browser.params.url);
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    });

    it('should navigatr to the cart and verify it is empty', function() {

        var cartIcon = element(by.css('.cart'));
        cartIcon.click();

        var errorMessageEmoptyCart = element(by.css('panel-body text-center'));
        expect(errorMessageEmoptyCart.getText().toBe('Your basket is empty.'));
    });
});