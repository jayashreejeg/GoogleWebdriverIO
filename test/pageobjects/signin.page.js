

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {

   

    get inputEmail(){
        return $('#identifierId');
    }


    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

 

  
}

module.exports = new SignInPage();
