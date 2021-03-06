

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get emailLink(){
        return $('.gb_f');
    }

    get signInLink(){
        return $("//a[text()='Sign in']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async gmail(){
        await this.emailLink.click();
    }

    async signIn(){
        await this.signInLink.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new CreateAccountPage();
