const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

beforeEach(async () => {
  global.driver = await new Builder()
    .forBrowser('chrome')
    .build();
});

afterEach(async () => {
  await global.driver.quit();
});