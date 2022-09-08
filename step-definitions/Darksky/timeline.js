const { Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const { expect } = require("chai");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

Given(/^I am on darksy homepage$/, async function () {
    await browser.url('https://www.darksy.net/')
});

When(/^I Click on Learn about Hotels.com Rewards$/, async function () {
    const allTimeLineData = await $$('//div[@id="timeline"]//div[@class="hours"]//span[contains(@class,"hour")]//span')
       
    for (const timeLineData of allTimeLineData) {
     console.log(await timeLineData.getText());
 }
 expect(allTimeLineData, 'There arent 12-data points').to.equal(12);
});


