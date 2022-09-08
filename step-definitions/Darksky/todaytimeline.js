const { Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Darksky/Homepage");
const Searchpage = require("../../Pages/Darksky/Searchpage");
const { expect } = require("chai");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

Given(/^I am on darksy homepage$/, async function () {
    await browser.url('https://www.darksy.net/')
});

When(/^I scroll down to Today's timeline$/, async function () {
 const TodayTimeline = await $('.day revealed')
 await TodayTimeline.scrollIntoView();
});

And(/^I click on the + button$/, async function () {
    await $('.cls-1').click();
   });
