import SwagLoginPage from "../../pageobjects/SwagPages/SwagLoginPage";
import Homepage from "../../pageobjects/Swagpages/Homepage";
import { config } from "../../wdio.conf";
import allureReporter from '@wdio/allure-reporter'

describe('Login Page Suite', () => {
    beforeEach(async () => {    
        await SwagLoginPage.open();
    
    });
   it('Verify URL', async() => {
       await browser.url("https://www.saucedemo.com/")
       await expect(browser).toHaveUrl("https://www.saucedemo.com/")
       console.log("Verify the URL")
      
   });
   it('Verify Page Title', async() => {
    console.log("Verify the Page Tilte")
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveTitle("Swag Labs")
    
});

it('User Logins and Selects Products ', async() => {
await SwagLoginPage.login('standard_user', 'secret_sauce');
await browser.takeScreenshot();
console.log("User logs into the application");
await expect(Homepage.textproducts).toExist();
await expect(Homepage.textproducts).toHaveTextContaining('PRODUCTS');
console.log(" Verify the Home page");
await expect(Homepage.peekimage).toExist();
await browser.takeScreenshot();
console.log(" Verify the peekimage");
await expect(Homepage.emptycartlink).toExist();
console.log(" Verify the Cart");
await expect(Homepage.lablesaucelabsbackpack).toExist();
await expect(Homepage.imgsaucelabsbackpack).toExist();
await expect(Homepage.lablesaucelabsbikelight).toExist();
await expect(Homepage.imgsaucelabsbikelight).toExist();
await expect(Homepage.lablesaucelabsbolttshirt).toExist();
await expect(Homepage.imgsaucelabsbolttshirt).toExist();
await browser.takeScreenshot();
await expect(Homepage.lablesaucelabsfleecejacket).toExist();
await expect(Homepage.imgsaucelabsfleecejacket).toExist();
await Homepage.lablesaucelabsfleecejacket.scrollIntoView();
await expect(Homepage.lablesaucelabsonessie).toExist();
await expect(Homepage.imgsaucelabsonessie).toExist();
await expect(Homepage.lablestestallthethingstshirtred).toExist();
await expect(Homepage.emptycartlink).toExist();
await browser.takeScreenshot();
await Homepage.emptycartlink.scrollIntoView();
    
    await Homepage.btnaddtocartsaucelabsbackpack.click();
    browser.pause(100000)
    const cart1=await Homepage.shoppingcartbadge.getText()
    console.log(cart1)
    await expect(cart1).toMatch('1')
    await Homepage.btnaddtocartsaucelabsbikelight.click();
    browser.pause(10000)
    await browser.takeScreenshot();
    const cart2=await Homepage.shoppingcartbadge.getText()
    console.log(cart2)
    await expect(cart2).toMatch('2')
    await browser.takeScreenshot();
    await Homepage.btnaddtocartsaucelabsbolttshirt.scrollIntoView();
    await Homepage.btnaddtocartsaucelabsbolttshirt.click();
    browser.pause(10000)
    await Homepage.btnaddtocartsaucelabsfleecejacket.click();
    await Homepage.shoppingcartbadge.scrollIntoView();
    const cart4=await Homepage.shoppingcartbadge.getText()
    console.log(cart4)
    await expect(cart4).toMatch('4')
    await browser.takeScreenshot();
    await Homepage.btnaddtocartsaucelabsonessie.scrollIntoView();
    await Homepage.btnaddtocartsaucelabsonessie.click();
    await Homepage.btnaddtocarttestallthethingstshirtred.click();
    await Homepage.shoppingcartbadge.scrollIntoView();
    const cart6=await Homepage.shoppingcartbadge.getText()
    await browser.takeScreenshot();
    console.log(cart6)
    await expect(cart6).toMatch('6')
/*
Remove cart validations
*/
await Homepage.rembtnsaucelabsbackpack.click();
    browser.pause(100000)
    await browser.takeScreenshot();
    const remove5=await Homepage.shoppingcartbadge.getText();
    console.log(remove5)
    await expect(remove5).toMatch('5')
    await Homepage.rembtnsaucelabsbikelight.click();
    browser.pause(10000)
    const remove4=await Homepage.shoppingcartbadge.getText();
    console.log(remove4)
    await expect(remove4).toMatch('4')
    await browser.takeScreenshot();
    await Homepage.rembtnsaucelabsbolttshirt.scrollIntoView();
    await Homepage.rembtnsaucelabsbolttshirt.click();
    browser.pause(10000)
    await Homepage.rembtnsaucelabsfleecejacket.click();
    await Homepage.shoppingcartbadge.scrollIntoView();
    const remove2=await Homepage.shoppingcartbadge.getText();
    console.log(remove2)
    await expect(remove2).toMatch('2')
    await browser.takeScreenshot();
    await Homepage.rembtnsaucelabsonessie.scrollIntoView();
    await Homepage.rembtnsaucelabsonessie.click();
    await browser.takeScreenshot();
    await Homepage.rembtntestallthethingstshirtred.click();
    await Homepage.emptycartlink.scrollIntoView();
    await browser.waitUntil(
        async () => (await Homepage.textproducts.getText()) === 'PRODUCTS',
        {
            timeout: 5000,
            timeoutMsg: 'Load time for screen shot'
        }
    );
    await browser.takeScreenshot();
});
});


