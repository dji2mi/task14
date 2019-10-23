"use strict";
const { When } = require('cucumber');



When(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});

