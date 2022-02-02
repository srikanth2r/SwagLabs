import basePage from "../basepage";
import { ChainablePromiseElement } from 'webdriverio';
class Homepage extends basePage {
    public get textproducts(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//span[text()='Products']");
    }

    public get peekimage(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[@class='peek']");
    }
/*
product images objects
*/
    public get emptycartlink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[@class='shopping_cart_link']");
    }
    public get shoppingcartbadge(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("span[class='shopping_cart_badge']");
    }

    public get imgsaucelabsbackpack(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Backpack']");
    }
    public get imgsaucelabsbikelight(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Bike Light']");

    } 
    public get imgsaucelabsbolttshirt(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Bolt T-Shirt']");

    } 
    public get imgsaucelabsfleecejacket(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Fleece Jacket']");

    } 
    public get imgsaucelabsonessie(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Onesie']");

    } 
    public get imgtestallthethingstshirtred(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Test.allTheThings() T-Shirt (Red)']");
    }
/*
product lable objects
*/
    public get lablesaucelabsbackpack(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Backpack']");
    }
    public get lablesaucelabsbikelight(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Bike Light']");

    } 
    public get lablesaucelabsbolttshirt(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Bolt T-Shirt']");

    } 
    public get lablesaucelabsfleecejacket(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Fleece Jacket']");

    } 
    public get lablesaucelabsonessie(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Sauce Labs Onesie']");

    } 
    public get lablestestallthethingstshirtred(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[text()='Test.allTheThings() T-Shirt (Red)']");
    }


    public get lablesaucelabsbackpackprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[1]");
    }
    public get lablesaucelabsbikelightprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[2]");

    } 
    public get lablesaucelabsbolttshirtprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[3]");

    } 
    public get lablesaucelabsfleecejacketprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[4]");

    } 
    public get lablesaucelabsonessieprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[5]");

    } 
    public get lablestestallthethingstshirtredprice(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("(//*[@class='pricebar']/div[@class='inventory_item_price'])[6]");
    }   

    public get btnaddtocartsaucelabsbackpack(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-sauce-labs-backpack']");
    }
    public get btnaddtocartsaucelabsbikelight(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-sauce-labs-bike-light']")

    } 
    public get btnaddtocartsaucelabsbolttshirt(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-sauce-labs-bolt-t-shirt']");

    } 
    public get btnaddtocartsaucelabsfleecejacket(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-sauce-labs-fleece-jacket']");

    } 
    public get btnaddtocartsaucelabsonessie(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-sauce-labs-onesie']");

    } 
    public get btnaddtocarttestallthethingstshirtred(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }

    public get descsaucelabsbackpack(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//div[text()='carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.']");
    }

    public get descsaucelabsbikelight1(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[contains(text(),'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')]");
    }  
    public get descsaucelabsbikelight2(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[contains(text(),'A red light isn')]");
    }    
    public get descsaucelabsbolttshirt(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//div[text()='Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.']");
    }
    public get descsaucelabsfleecejacket(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[contains(text(),'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')]");
    }
    public get descsaucelabsonessie(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//*[contains(text(),'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won')]");
    }
    public get desctestallthethingstshirtred(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("//div[text()='This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.']");
     }

/*
Remove Button Objects
*/

     public get rembtnsaucelabsbackpack(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-sauce-labs-backpack']");
    }
    public get rembtnsaucelabsbikelight(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-sauce-labs-bike-light']")

    } 
    public get rembtnsaucelabsbolttshirt(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-sauce-labs-bolt-t-shirt']");

    } 
    public get rembtnsaucelabsfleecejacket(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-sauce-labs-fleece-jacket']");

    } 
    public get rembtnsaucelabsonessie(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-sauce-labs-onesie']");

    } 
    public get rembtntestallthethingstshirtred(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $("button[id='remove-test.allthethings()-t-shirt-(red)']");
    }


     

}
  
export default new Homepage();




