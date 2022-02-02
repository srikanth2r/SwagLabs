import SwagLoginPage from "../../pageobjects/SwagPages/SwagLoginPage";
import Homepage from "../../pageobjects/Swagpages/Homepage";
import { config } from "../../wdio.conf";
import allureReporter from '@wdio/allure-reporter'

describe('Home Page Suite', () => {
    beforeEach(async () => {    
        await SwagLoginPage.open();
    });
   it('Verify Page Title', async() => {
    console.log("Verify the Page Tilte")
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveTitle("Swag Labs")
    });

    
it('User Validates the products', async() => {
    await SwagLoginPage.login('standard_user', 'secret_sauce');
    await browser.takeScreenshot();
    console.log("User logs into the application");
    await expect(Homepage.textproducts).toExist();
    await expect(Homepage.textproducts).toHaveTextContaining('PRODUCTS');
    console.log(" Verify the Home page");
    await expect(Homepage.peekimage).toExist();
    await browser.takeScreenshot();
    const backpack=Homepage.lablesaucelabsbackpack
    console.log(backpack.getText())
    await expect(backpack).toHaveText("Sauce Labs Backpack");
    const backpackdesc=Homepage.descsaucelabsbackpack
    console.log(backpackdesc.getText())
    await expect(backpackdesc).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    await browser.takeScreenshot();
    const backpackprice=Homepage.lablesaucelabsbackpackprice
    console.log(backpackprice.getText())
    await expect(backpackprice).toHaveTextContaining("$29.99");


    const backlight=Homepage.lablesaucelabsbikelight
    console.log(backlight.getText())
    await expect(backlight).toHaveText("Sauce Labs Bike Light");
    const backlightdesc=Homepage.descsaucelabsbikelight2   
    console.log(backlightdesc.getText())
    await expect(backlightdesc).toHaveTextContaining("t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    const backlightprice=Homepage.lablesaucelabsbikelightprice
    console.log(backlightprice.getText())
    await expect(backlightprice).toHaveTextContaining("$9.99");
    await browser.takeScreenshot();
   


    const bolttshirt=Homepage.lablesaucelabsbolttshirt
    console.log(bolttshirt.getText())
    await expect(bolttshirt).toHaveText("Sauce Labs Bolt T-Shirt");
    const boltshirtdesc=Homepage.descsaucelabsbolttshirt
    console.log(boltshirtdesc.getText())
    await expect(boltshirtdesc).toHaveTextContaining("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
    const boltshirtprice=Homepage.lablesaucelabsbolttshirtprice
    console.log(boltshirtprice.getText())
    await expect(boltshirtprice).toHaveTextContaining("$15.99");
    await browser.takeScreenshot();


    const fleecejacket=Homepage.lablesaucelabsfleecejacket
    console.log(fleecejacket.getText())
    await expect(fleecejacket).toHaveText("Sauce Labs Fleece Jacket");
    const fleecejacketdesc=Homepage.descsaucelabsfleecejacket
    console.log(fleecejacketdesc.getText())
    await expect(fleecejacketdesc).toHaveTextContaining("s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
    const fleecejacketprice=Homepage.lablesaucelabsfleecejacketprice
    console.log(fleecejacketprice.getText())
    await expect(fleecejacketprice).toHaveTextContaining("$49.99");
    await browser.takeScreenshot();

    const onesse=Homepage.lablesaucelabsonessie
    console.log(onesse.getText())
    await expect(onesse).toHaveText("Sauce Labs Onesie");
    const onessedesc=Homepage.descsaucelabsonessie
    console.log(onessedesc.getText())
    await expect(onessedesc).toHaveTextContaining("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won");
    const onesseprice=Homepage.lablesaucelabsonessieprice
    console.log(onesseprice.getText())
    await expect(onesseprice).toHaveTextContaining("$7.99");
    await browser.takeScreenshot();
    
    const tshirtred=Homepage.lablestestallthethingstshirtred
    console.log(tshirtred.getText())
    await expect(tshirtred).toHaveText("Test.allTheThings() T-Shirt (Red)");
    const reddesc=Homepage.desctestallthethingstshirtred
    console.log(reddesc.getText())
    await expect(reddesc).toHaveTextContaining("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
    const redprice=Homepage.lablestestallthethingstshirtredprice
    console.log(redprice.getText())
    await expect(redprice).toHaveTextContaining("$15.99");
    await browser.takeScreenshot();

});

});
