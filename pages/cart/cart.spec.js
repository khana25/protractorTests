var CartPage = require('./cart.po.js');
var CommonElements = require('../common/common.po.js');

var commonElements = new CommonElements();
var cartPage = new CartPage();

describe('Cart page', function() {

    beforeEach(function () {
        browser.get(browser.params.url);
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    });

    it('should navigatr to the cart and verify it is empty', function() {
        commonElements.cartIcon.click();
        expect(cartPage.errorMessageEmoptyCart.getText().toBe(cartPage.cartEmptyMessageText));
    });
});