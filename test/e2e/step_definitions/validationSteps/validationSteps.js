"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;


Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }  
});