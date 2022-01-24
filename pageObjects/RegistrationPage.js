/**
 * Registration Page: Page Objects
 * Constructor to initialize the Registration page's page objects with given selectors.
 */

import { Selector, t } from "testcafe";

class RegistrationPage{
    constructor(){

        this.registrationPageHeader = Selector('h1').withText('Register')                       //Web Element: Registration Page Header Text
        this.registrationPageUserGender = Selector('#gender-male')                              //Web Element: Gender Options
        this.registrationPageFirstName = Selector('#FirstName')                                 //Web Element: First Name
        this.registrationPageLastName = Selector('#LastName')                                   //Web Element: Last Name
        this.registrationPageDoBList = Selector("select[name='DateOfBirthDay']")                //Web Element: Date of Birth: Day
        this.registrationPageDoMList = Selector("select[name='DateOfBirthMonth']")              //Web Element: Date of Birth: Month
        this.registrationPageDoYList = Selector("select[name='DateOfBirthYear']")               //Web Element: Date of Birth: Year
        this.registrationPageEmail = Selector('#Email')                                         //Web Element: Email Text Field
        this.registrationPageCompanyName = Selector('#Company')                                 //Web Element: Company Text Field
        this.registrationPagePassword = Selector('#Password')                                   //Web Element: Password Text Field
        this.registrationPageConfirmPassword = Selector('#ConfirmPassword')                     //Web Element: Confirm Password Text Field
        this.registrationPageRegisterButton = Selector('#register-button')                      //Web Element: Register button
        this.registrationPageSucessMsg = Selector('div.result').withText('Your registration completed')  //Web Element: Registration Sucess Message
       
    }

    //Method to Select Date of Birth: Day from Drop down
    async selectDay(day){
        const dayOption = this.registrationPageDoBList.find('option')
        await t
            .click(this.registrationPageDoBList)                          //Click Action: on Day Dropdown
            .click(dayOption.withText(day))                               //Click Action: to select day

    }

    //Method to Select Date of Birth: Month from Drop down
    async selectMonth(month){
        const monthOption = this.registrationPageDoMList.find('option')
        await t
            .click(this.registrationPageDoMList)                         //Click Action: on Month Dropdown
            .click(monthOption.withText(month))                          //Click Action: to select month

    }

    //Method to Select Date of Birth: Year from Drop down
    async selectYear(year){
        const yearOption = this.registrationPageDoYList.find('option')
        await t
            .click(this.registrationPageDoYList)                         //Click Action: on Year Dropdown
            .click(yearOption.withText(year))                            //Click Action: to select Year

    }

}
export default new RegistrationPage();