/**
 * Logged In Page: Page Objects.
 * Constructor to initialize the logged in page's page objects with given selectors.
 */

import { Selector, t } from "testcafe";

class LoggedInPage{
    constructor(){

        this.loggedInPageMyAccountLink = Selector("a[class='ico-account']")     //Web Element: My Account link
        this.loggedInPageLogOutLink = Selector("a[class='ico-logout']")            //Web Element: Logout link
        
    }
}
export default new LoggedInPage();