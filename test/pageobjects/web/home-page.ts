import Page from './page';

class HomePage extends Page {

    public get dropdownLogin () {
        return $('//body/div[@id="root"]/div[1]/section[1]/div[1]/div[3]/div[1]/div[1]');
    }

    public get linkCustomer () {
        return $('body > div.jss328.jss326.jss83.popper.hasAnimation > ul > li:nth-child(1)');
    }

    public async clickLoginCustomer () {
        await this.dropdownLogin.click();
        await this.linkCustomer.click();
    }

    public open () {
        return super.open('');
    }
}

export default new HomePage();
