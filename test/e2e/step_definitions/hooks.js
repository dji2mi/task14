"use strict";
const {After, Status} = require('cucumber');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

After(function (testCase) {
    if (testCase.result.status === Status.PASSED) {
        return browser.takeScreenshot().then((screenShot) => {
            let decodedImage = new Buffer(screenShot, 'base64');    
            return this.attach(decodedImage, 'image/png');
        });
    }
});