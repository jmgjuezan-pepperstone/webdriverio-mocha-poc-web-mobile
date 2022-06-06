class SplashScreen{

    private get btnSkip () {
        return $("//android.widget.TextView[@text='Skip']");
    }

    public async clickbtnSkip () {
        await this.btnSkip.click();
    }
}

export default new SplashScreen();
