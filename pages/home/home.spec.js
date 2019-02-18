var helper = require('../../helper');
var HomePage = require('./home.po.js');



describe('Home page : Login/register', function() {
    var homePage = HomePage();

    var randomFirstName = faker.name.firstName();
    var password = faker.internet.password();
    var email = faker.internet.email();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });


    it('should have a little', function () {
        expect(browser.getTitle()).toEqual(homePage.pageTitle);
    });

    it('should sign-in and verify password error appear', function(){
        homePage.goToLogin();
        helper.waitUntilReady(homePage.username);
        homePage.username.sendKeys('test@test.com');
        homePage.password.sendKeys('password');
        homePage.signInLoginForm.click()
        helper.waitUntilReady(homePage.passwordExisitingError);
        expect(homePage.passwordExisitingError.getText()).toBe(homePage.passExistingErrorText);
    });

    it('should sign in and verify that the password cannot be blank', function() {
        homePage.goToLogin()
        helper.waitUntilReady(homePage.username);
        homePage.username.sendKeys('123@123.com');
        homePage.signInLoginForm.click()
        expect(homePage.passwordExisitingError.getText()).toBe(homePage.passBlankErrorText);


    });

    it('should register a new user', function() {
        homePage.goToRegister()
        homePage.doRegister()


    });

});