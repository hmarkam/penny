/**
 * Home Page: Page Objects
 * Constructor to initialize the Home page's page objects with given selectors
 */
import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        //this.homePageRegisterLink = Selector('a').withText('REGISTER')    //Home Page: Register link web element
        //this.homePageSignLink = Selector('a').withText('LOG IN')          //Home Page: Log in link web element

        this.homePageRegisterLink = Selector("a[class='ico-register']")    //Home Page: Register link web element
        this.homePageSignLink = Selector("a[class='ico-login']")         //Home Page: Log in link web element
    }
}
export default new HomePage();