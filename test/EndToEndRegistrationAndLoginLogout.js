/**
 * This fixture contains following end to end scenarios:
 * 1. Verify Home Page Navigation
 * 2. Verify New User Account Registration and logout.
 * 3. Verify Login with newly created user account and logout.
 */

//Import required page object reference and selector, client funtion
import { ClientFunction, Selector } from "testcafe";
import HomePage from "../pageObjects/HomePage";
import LoggedInPage from "../pageObjects/LoggedInPage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import { nanoid } from 'nanoid';

//Defined variables used in the given tests
const testDataSet = require('../testData/data.json')                         //importing configuration test data json file
const HomePageURL = 'https://demo.nopcommerce.com/'                          //Declared/Initialized Home Page URL
const getCurrentPageURL = ClientFunction(() => window.location.href);        //Declared/Initialized variable to get current page URL
var emailSuffix = '@mail.com';                                               //Initialied variable with email suffix
let randomString = [];                                                       //Declared a variable to store random string
var randomNumber = Math.floor(Math.random() * 10000);                        //Declared a variable to store random number



/**
 * Fixture to create new account, and login with the same newly created account and logout.
*/
fixture('Create new account, and login with the same newly created account and logout.')
    .page(HomePageURL);


/**
 * Test To verify Home page navigation.
 */
test('Verify Home Page', async t => {
    await t
        .expect(HomePage.homePageRegisterLink.exists).ok()                   //Verify Home Page Navigation by Register link present on the page
        .expect(getCurrentPageURL()).contains(HomePageURL);                  //Verify current page contains home page url
});


/**
 * Test to verify new account registration and logout from account.
 */
testDataSet.forEach(data => {
    test('Verify New Account Registration', async t => {
            await t
                .setTestSpeed(0.1)
                .click(HomePage.homePageRegisterLink)                                              //Click Action: Register link   

                .expect(RegistrationPage.registrationPageHeader.exists).ok()                       //Verify: Registration Page Header

                .click(RegistrationPage.registrationPageUserGender)                                //Click Action: Gender Option Male

                .typeText(RegistrationPage.registrationPageFirstName, data.firstname)              //Enter: First Name

                .typeText(RegistrationPage.registrationPageLastName, data.lastname)                //Enter: Last Name

            await RegistrationPage.selectDay(data.dayofbirth)                                      //Select: Date of Birth: Day
            await RegistrationPage.selectMonth(data.monthofbirth)                                  //Select: Date of Birth: Month
            await RegistrationPage.selectYear(data.yearofbirth)                                    //Select: Date of Birth: Year

            randomString = ((randomNumber++) + nanoid(5))                                          //Storing random generated string for email
            console.log("Email: ", randomString)
            
            await t 
                .typeText(RegistrationPage.registrationPageEmail, data.email + randomString + emailSuffix)      //Enter: Uniquely generated email

                .typeText(RegistrationPage.registrationPagePassword, data.password)                //Enter: Password

                .typeText(RegistrationPage.registrationPageConfirmPassword, data.confirmpassword)  //Enter: Confirm Password

                .click(RegistrationPage.registrationPageRegisterButton)                            //Click Action: Register button

                .expect(RegistrationPage.registrationPageSucessMsg.exists).ok()                    //Verify: Registration Sucess Message

                .click(LoggedInPage.loggedInPageLogOutLink)                                        //Click Action: Logout button

                .expect(HomePage.homePageRegisterLink.exists).ok()                                 //Verify: Logout Sucessful
        })
        
});



/**
 * Test to verify login feature with newly registered user email and password and perform logout.
 */
testDataSet.forEach(data => {
    test('Verify Registered User Login and Logout', async t => {
        await t
            .wait(1000)
            .setTestSpeed(0.1)

            .click(HomePage.homePageSignLink)                                               //Click Action: Sign in Link

            .expect(LoginPage.loginPageHeader.exists).ok()                                  //Verify: Login Page Header

            .typeText(LoginPage.loginPageUserEmail, data.email + randomString + emailSuffix)     //Enter: Already registered user email

            .typeText(LoginPage.loginPageUserPassword, data.password)                        //Enter: Already set password

            .click(LoginPage.loginPageLoginButton)                                          //Click Action: Login button

            .expect(LoggedInPage.loggedInPageMyAccountLink.exists).ok()                     //Verify: My Account Link after login

            .click(LoggedInPage.loggedInPageLogOutLink)                                     //Click Action: Logout link

            .expect(getCurrentPageURL()).contains(HomePageURL)                              //Verify: Sucessfull logout by home page URL
    })
});
