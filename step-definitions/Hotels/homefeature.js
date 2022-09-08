const { Given,Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const { expect } = require("chai");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

Given(/^I am on hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

When(/^I Click on Learn about Hotels.com Rewards$/, async function () {
    await $('//a[text()="Learn about Hotels.com Rewards"]').click();
});

And(/^I Verify Hotels Rewards opened in a new window$/, async function () {
    const allWindows = await homepage.getNumberOfWindows();
    expect(allWindows, 'There is no new window').to.equal(2);
});

And(/^I Click on Join Now$/, async function () {
    await $('.kes-button primary-button tt-u').click()
});

And(/^I Verify Form is blank$/, async function () {
    const emailAddress = await $('#signupFormEmailInput')
    const emailAdressBlank = await emailAddress.getText()
    expect(emailAdressBlank, 'Email address box is blank ').to.be.true;

    const firstName = await $('#signupFormFirstNameInput')
    const firstNameBlank = await firstName.getText()
    expect(firstNameBlank, 'first name box is blank ').to.be.true;

    const lastName = await $('#signupFormLastNameInput')
    const lastNameBlank = await lastName.getText()
    expect(lastNameBlank, 'last name box is blank ').to.be.true;

    const password = await $('#signupFormPasswordInput')
    const passwordBlank = await password.getText()
    expect(passwordBlank, 'password box is blank ').to.be.true;

});

Then(/^I Verify Continue button is NOT enabled$/, async function () {
    expect(await homepage.isContinueBtnEnabled(), 'Continue button is NOT enabled').to.be.true;
});









