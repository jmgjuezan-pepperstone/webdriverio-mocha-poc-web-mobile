import Login from '../pageobjects/ILogin'
import LoginPage from '../pageobjects/web/login-page'
import LoginScreen from '../pageobjects/mobile/login-screen'

const run = (login: Login) => {
    describe('login', () => {
        it('should be able to login using credentials', async () => {
            await login.login('tomsmith', 'SuperSecretPassword!');
        });
    });
}

if (process.env.RUN_TYPE === 'WEB') {
    run(LoginPage);
} else {
    run(LoginScreen);
}
