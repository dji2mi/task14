"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const cucumberJunitConvert = require('cucumber-junit-convert');

const reporterOptions = {
        theme: 'bootstrap',
        jsonFile: path.join(__dirname, '../../../reports/report.json'),
        output: path.join(__dirname, '../../../reports/cucumber_report.html'),
        reportSuiteAsScenarios: true,
        launchReport: true
    };

const options = {
        inputJsonFile: './reports/report.json',
        outputXmlFile: './reports/report.xml'
    };

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,    
    directConnect: true,    
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./reports/report.json','./node_modules/cucumber-pretty'],
        tags: yargs.tag || '@all'
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        return browser.manage().window().setSize(1000, 800);
    },
    afterLaunch: () => {
        reporter.generate(reporterOptions);
        cucumberJunitConvert.convert(options);
    }
};