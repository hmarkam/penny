/**
 * Login Page: Page Objects
 * Constructor to initialize the login page's page objects with given selectors
 */

import { Selector, t } from "testcafe";

class LoginPage{
    constructor(){

        this.loginPageHeader = Selector('h1').withText('Welcome, Please Sign In!')        //Web Element: Login Page Header
        this.loginPageUserEmail = Selector('#Email')                                      //Web Element: Email Text Field
        this.loginPageUserPassword = Selector('#Password')                                //Web Element: Password Text Field
        this.loginPageLoginButton = Selector("button[class='button-1 login-button']")     //Web Element: Login In button

        this.loginPageInvalidEmail = Selector("div[class='message-error validation-summary-errors']")
        .withText('Login was unsuccessful. Please correct the errors and try again.')
        this.loginInvalidEmailFormat = Selector('#Email-error')
        .withText('Wrong email')
    }
}
export default new LoginPage();