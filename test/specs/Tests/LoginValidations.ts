import Homepage from "../../pageobjects/Swagpages/Homepage";
import SwagLoginPage from "../../pageobjects/Swagpages/SwagLoginPage";

describe('Login Validations', () => {

    beforeEach("Before Launching Steps", async () => {
        await SwagLoginPage.open();
    });

    it('Verify URL', async () => {
        await browser.url("https://www.saucedemo.com/")
        await expect(browser).toHaveUrl("https://www.saucedemo.com/")
        await browser.takeScreenshot();
        console.log("Verify the URL")
        await expect(browser).toHaveTitle("Swag Labs")
    });

    it('User login error validations', async () => {
        await SwagLoginPage.login('locked_out_user', 'secret_sauce');
        await browser.takeScreenshot();
        if (SwagLoginPage.invalidlogintext.isExisting) {
            console.log("Please enter valid credentials")
        }
        else {
            await expect(Homepage.products()).toHaveTextContaining('PRODUCTS');
        }
        await browser.takeScreenshot();
    });

    it('Error validations', async () => {
        await SwagLoginPage.login('problem_user', 'secret_sauce');
        await browser.takeScreenshot();
        await expect(Homepage.products()).toHaveTextContaining('PRODUCTS');
        console.log("User validates home page")
        await expect(Homepage.emptycartlink).toHaveTextContaining(" ")
        await expect(Homepage.btnaddtocartsaucelabsbackpack).toHaveTextContaining('Add to cart');
        await expect(Homepage.btnaddtocartsaucelabsbikelight).toHaveTextContaining('Add to cart');
        await browser.takeScreenshot();

    });
});