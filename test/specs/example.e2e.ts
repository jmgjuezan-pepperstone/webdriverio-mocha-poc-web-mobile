import LoginPage from  '../pageobjects/web/login.page';
import SecurePage from '../pageobjects/web/secure.page';

const runType = process.env.RUN_TYPE;

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        if (runType !== 'WEB') return
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


