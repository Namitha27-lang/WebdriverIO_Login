const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
Given(/^user is on login page$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/login')
});

When(/^user enters username and password$/, async () => {
    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
});

When(/^clicks on login button$/, async () => {
    await $('button[type="submit"]').click()
});

Then(/^user is navigated to the home page$/, async() => {
    const elem = await $('div[class="flash success"]')
    const messageText = await elem.getText();
        expect(messageText).toContain('You logged into a secure area!');
});
