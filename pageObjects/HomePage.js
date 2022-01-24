/**
 * Home Page: Page Objects
 * Constructor to initialize the Home page's page objects with given selectors
 */
import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.homePageRegisterLink = Selector('a').withText('Register')    //Home Page: Register link web element
        this.homePageSignLink = Selector('a').withText('Log in')          //Home Page: Log in link web element
    }
}
export default new HomePage();