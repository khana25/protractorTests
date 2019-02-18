var helper = require('./helper');

describe('Main page : Login/register', function() {

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should have a little', function () {


        var title = 'Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone';
        expect(browser.getTitle()).toEqual(title);
    });

    it('should sign-in and verify password error appear', function(){
        var signInButton = element(by.id('sign-in'));
        var signInLoginForm = element(by.name('submit_attempt'));

        var username = element(by.id('join_neu_email_field'))
        var password = element(by.id('join_neu_password_field'));

        var passwordExisitingError = element(by.id('aria-join_neu_password_field-error'));

        signInButton.click();
        helper.waitUntilReady(username);

        username.sendKeys('khadijaraza@hotmail.com');
        password.sendKeys('Akhan12');
        signInLoginForm.click();
        helper.waitUntilReady(passwordExisitingError);

        var passExistingErrorText = passwordExisitingError.getText();

        expect(passExistingErrorText).toBe('Password was incorrect.');
        // passwordExisitingError.toBe('Password was incorrect.');

    });

    it('should reguster a new user', function() {

        var registerButtonMainPage = element(by.id('register'));
        var registerEmail = element(by.id('join_neu_email_field'));
        var firstName = element(by.id('join_neu_first_name_field'));
        var registerPassword = element(by.id('join_neu_password_field'));
        var etsy_finds = element(by.id('email_marketing_opt_in_consent_message'));
        var registerButtonFieldPopup = element(by.valueOf('register'));

        registerButtonMainPage.click();
        helper.waitUntilReady(firstName);

        registerEmail.sendKeys('automation.test@test.com');
        firstName.sendKeys('TestAtuotmation');
        registerPassword.sendKeys('Password1');
        etsy_finds.click();
        helper.waitUntilReady(registerButtonFieldPopup);
        // registerButtonFieldPopup.click();


    });

});