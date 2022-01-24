/**
 * This fixture contains following negative scenarios to validate on login page:
 * 1. Verify invalid email, correct password.
 * 2. Verify correct email, invalid password.
 * 3. Verify invalid email, invalid password.
 * 4. Verify incorrect email format. 
 * 5. Verify unregistered user login.
 */

//Import required page object reference and selector, client funtion
import { ClientFunction, Selector } from "testcafe";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";

//Defined variables used in the given tests
const jsonTestDataObj = require('../testData/testData.json')                 //Import testData json file
const HomePageURL = 'https://demo.nopcommerce.com/'                          //Declared/Initialized Home Page URL
const getCurrentPageURL = ClientFunction(() => window.location.href);        //Declared/Initialized variable to get current page URL
var validEmail = 'valid@email.com';                                          //Initialied variable with correct email
var validPassword = '@123Password'                                           //Initialize variable with corrent password



/**
 * Login: Negative tests with conbination of correct/incorrect email and password.
*/
fixture('Login: Negative tests with conbination of correct/incorrect email and password.')
    .page(HomePageURL);


/**
 * Test To verify Home page navigation.
 */
test('Verify Home Page', async t =>{
    await t
        .expect(HomePage.homePageRegisterLink.exists).ok()                   //Verify Home Page Navigation by Register link present on the page
        .expect(getCurrentPageURL()).contains(HomePageURL);                  //Verify current page contains home page url
});

/**
 * Test to verify login feature with combination of invalid/incorrect user email and password.
 */
 jsonTestDataObj.InvalidEmailPassword.forEach((testData) =>{
    test('Verify scenarios for invalid/incorrect email/password', async t =>{
        await t
            .wait(1000)
            .setTestSpeed(0.1)

            .click(HomePage.homePageSignLink)                                               //Click Action: Sign in Link

            .expect(LoginPage.loginPageHeader.exists).ok()                                  //Verify: Login Page Header
    
            .typeText(LoginPage.loginPageUserEmail,testData.email)                          //Enter: Incorrect/Invalid User email

            .typeText(LoginPage.loginPageUserPassword,testData.password)                    //Enter: Incorrect/Invalid Password

            .click(LoginPage.loginPageLoginButton)                                          //Click Action: Login button

            .expect((LoginPage.loginPageInvalidEmail.exists)).ok();                         //Verify: Invalid/Incorrect email error

        })
});

/**
 * Test to verify login feature with invalid user email format and correct password.
 */
 jsonTestDataObj.InvalidEMailFormat.forEach((testData) =>{
    test('Verify scenarios for incorrect email format', async t =>{
        await t
            .wait(1000)
            .setTestSpeed(0.1)

            .click(HomePage.homePageSignLink)                                               //Click Action: Sign in Link

            .expect(LoginPage.loginPageHeader.exists).ok()                                  //Verify: Login Page Header
    
            .typeText(LoginPage.loginPageUserEmail,testData.email)                          //Enter: User email in invalid format

            .typeText(LoginPage.loginPageUserPassword,testData.password)                    //Enter: Password

            .click(LoginPage.loginPageLoginButton)                                          //Click Action: Login button

            .expect(LoginPage.loginInvalidEmailFormat.exists).ok()                          //Verify: Invalid/Incorrect email format
        })
});
