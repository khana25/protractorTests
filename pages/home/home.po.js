var helper = require('../../helper');
var faker = require('faker');

var HomePage = function() {

    var randomFirstName = faker.name.firstName();
    var password = faker.internet.password();
    var email = faker.internet.email();

    
    this.pageTitle = 'Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone';
    this.passExistingErrorText = 'Password was incorrect.'
    this.passBlankErrorText = "Can't be blank."

    // id
    this.signInButton = element(by.id('sign-in'));
    this.signInLoginForm = element(by.name('submit_attempt'));
    this.username = element(by.id('join_neu_email_field'))
    this.password = element(by.id('join_neu_password_field'));
    this.passwordExisitingError = element(by.id('aria-join_neu_password_field-error'));


    // register

    this.registerButtonMainPage = element(by.id('register'));
    this.registerEmail = element(by.id('join_neu_email_field'));
    this.firstName = element(by.id('join_neu_first_name_field'));
    this.registerPassword = element(by.id('join_neu_password_field'));
    this.etsy_finds = element(by.id('email_marketing_opt_in_consent_message'));
    this.registerButtonFieldPopup = element(by.valueOf('register'));


    this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButtonMainPage)
        this.registerButtonMainPage.click()
    }

    this.goToLogin = function () {
        helper.waitUntilReady()
        this.signInButton.click()

    }

    this.doRegister = function() {
        helper.waitUntilReady(this.firstName);
        this.registerEmail.sendKeys(email);
        this.firstName.sendKeys(randomFirstName);
        this.registerPassword.sendKeys(password);
        this.etsy_finds.click()
    }

}

module.exports = HomePage;