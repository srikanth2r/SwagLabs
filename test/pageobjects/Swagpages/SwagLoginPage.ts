import basePage from "../basepage";
import { ChainablePromiseElement } from 'webdriverio';
class SwagLoginPage extends basePage {

    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("input[id='user-name']");
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }

    public get loginbtn(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#login-button');
    }

    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginbtn.click();
        await browser.maximizeWindow();
    }
    public open(): Promise<string> {
        return super.open('/');
    }

}

export default new SwagLoginPage();
