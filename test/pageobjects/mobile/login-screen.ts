import ILogin from '../ILogin'
import SplashScreen from './splash-screen'

class LoginScreen implements ILogin {

    public get loginLogo () {
        return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');
    }

    private get inputUserName () {
        return $('//android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.EditText');
    }

    private get inputPassword () {
        return $('//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText');
    }

    private get btnLogin () {
        return $("//android.widget.TextView[@text='Log in']");
    }

    public async login (username: string, password: string) {
        await SplashScreen.clickbtnSkip();
        await expect(this.loginLogo).toBeDisplayed();

        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginScreen();
