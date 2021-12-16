const LandingPage = require('../pageobjects/landing.page');
const SignInPage = require('../pageobjects/signin.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('validating the login url', async () => {
        await LandingPage.open();
        await LandingPage.gmail();
        var title= "Gmail: Free, Private & Secure Email | Google Workspace";
        await expect(browser).toHaveTitleContaining(title);
        await LandingPage.signIn();
        await expect(browser).toHaveUrlContaining("accounts");
    });
    it('should login with invalid gmail', async () => {
        await LandingPage.open();
        await LandingPage.gmail();
        var title= "Gmail: Free, Private & Secure Email | Google Workspace";
        await expect(browser).toHaveTitleContaining(title);
        await LandingPage.signIn();
        await expect(browser).toHaveUrlContaining("accounts");
        
    });
});


