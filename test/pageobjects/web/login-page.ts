import Page from './page';
import ILogin from '../ILogin';
import HomePage from './home-page'

class LoginPage extends Page implements ILogin {

    private get inputEmailMobile () {
        return $('input[type="text"]');
    }

    private get inputPassword () {
        return $('input[type="password"]');
    }

    private get btnSubmit () {
        return $('#MainContent_LoginUser_LoginButton');
    }

    public async login (username: string, password: string) {
        await HomePage.open();
        await browser.setWindowSize(1170,947);
        await browser.setTimeout({ 'pageLoad': 10000 })
        await HomePage.clickLoginCustomer()
        await browser.pause(3000);
        await browser.switchWindow('https://portal.fwd.com.ph/CustomerPortal/Account/UserLogin.aspx?')
        await browser.setTimeout({ 'pageLoad': 10000 })

        await this.inputEmailMobile.waitForClickable({timeout: 10000})
        await this.inputEmailMobile.setValue(username);
        await this.inputPassword.setValue(password);
        await browser.pause(3000);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
