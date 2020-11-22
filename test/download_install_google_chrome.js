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
        //driver.quit();
    });

    beforeEach(() => {
       
        driver = new webdriver.Builder()
           .forBrowser('chrome')
           .build(); 
        
    });
    
    afterEach(() => {   
       // driver.quit();
    });


    it("He can successfully filter the list of computers by computer name", function downloadGoogle() {
        driver.get(url)
            .then(() =>  driver.getTitle())
            .then(pageTitle => assert.equal(pageTitle, "Google Chrome - Download the Fast, Secure Browser from Google"))
            .then(() => driver.findElement(By.className('chr-homepage-hero__download chr-grid-child')).click())
            .then((DownloadChrome => assert.strictEqual(DownloadChrome), "Download Chrome"))
            .then(() => driver.findElement(By.id("js-accept-install--linux")).click())
            .then((AcceptAndInstall) => assert.strictEqual("Accept and Install"))
            //.then(() => driver.findElement(By.))
            
            //assert.isString('chr-homepage-hero__download chr-grid-child')
            //.then(() => driver.findElement('js-download-hero')).click())
            // .then(() =>  driver.findElement(By.name('f')).sendKeys('ARRA'))
            //.then(() =>  driver.findElement(By.className(''))
            // .then(() =>  driver.findElement(By.name('f')).getAttribute('value'))
            // .then(filterFieldDisplayedAfter => assert.equal(filterFieldDisplayedAfter, "ARRA"))

            // .then(() => driver.quit())
            // .then(done)
            .catch(err => done(err));

   
    });

    // it("He sees empty list of computers when filter doesn't match any existing name", done => {
    //     driver.get(url)
    //         .then(() =>  driver.getTitle())
    //         .then(pageTitle => assert.equal(pageTitle, "Computers database"))
    //         .then(() =>  driver.findElement(By.name('f')).sendKeys('Idonotexist'))
    //         .then(() =>  driver.findElement(By.id('searchsubmit')).click())
    //         .then(() =>  driver.findElement(By.name('f')).getAttribute('value'))
    //         .then(filterFieldDisplayedAfter => assert.equal(filterFieldDisplayedAfter, "Idonotexist"))
    //         .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/h1')).getText())
    //         .then(noComputersTitle => assert.equal(noComputersTitle, "No computers found"))
    //         .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/div[2]/em')).getText())
    //         .then(noneComputersMessage => assert.equal(noneComputersMessage, "Nothing to display"))
    //         .then(() => driver.quit())
    //         .then(done)
    //         .catch(err => done(err));
    // });


});