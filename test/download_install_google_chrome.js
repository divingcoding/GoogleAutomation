'use strict';

const { expect, assert, should } = require('chai');
const { elementIsVisible } = require('selenium-webdriver/lib/until');


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder();

var url = "https://www.google.com/chrome/";

describe("Filter the computer list", () => {

    after(() => {
        driver.quit();
    });

    beforeEach(() => {
       
        driver = new webdriver.Builder()
           .forBrowser('chrome')
           .build(); 
        
    });
    
    afterEach(() => {   
       driver.quit();
    });


    it("He can successfully filter the list of computers by computer name", function downloadGoogle() {
        driver.get(url)
            .then(() =>  driver.getTitle())
            .then(pageTitle => assert.equal(pageTitle, "Google Chrome - Download the Fast, Secure Browser from Google"))
            .then(() => driver.findElement(By.className('chr-homepage-hero__download chr-grid-child')).click())
            .then((DownloadChrome => assert.strictEqual(DownloadChrome), "Download Chrome"))
            .then(() => driver.findElement(By.id("js-accept-install--linux")).click())
            .then((AcceptAndInstall) => assert.strictEqual(AcceptAndInstall), "Accept and Install")
            .then((CookiesButton => assert.strictEqual("Ok, got it")))
            .then(() => driver.findElement(By.id('thank-you-copy-container')))
            .then((ThankYouForDownloading => assert.strictEqual(ThankYouForDownloading), 'Thank you for downloading Chrome!'))
            .catch(err => done(err));

   
    });

});

