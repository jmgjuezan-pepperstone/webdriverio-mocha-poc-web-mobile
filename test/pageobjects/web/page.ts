export default class Page {
    public open (path: string) {
        return browser.url(`https://www.fwd.com.ph/${path}`)
    }
}
