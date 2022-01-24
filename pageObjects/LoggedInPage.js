/**
 * Logged In Page: Page Objects.
 * Constructor to initialize the logged in page's page objects with given selectors.
 */

import { Selector, t } from "testcafe";

class LoggedInPage{
    constructor(){

        this.loggedInPageMyAccountLink = Selector('a').withText('My account')      //Web Element: My Account link
        this.loggedInPageLogOutLink = Selector('a').withText('Log out')            //Web Element: Logout link
        
    }
}
export default new LoggedInPage();