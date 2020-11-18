import faker from 'faker';
import puppeteer from 'puppeteer'

const person = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('End to end test with puppeteer', () => {
  test('Should be able to fill the form and submit', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();
  
    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    })
  
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.contact-form');

    await page.click('input[name=fullname]');
    await page.type('input[name=fullname]', person.name);

    await page.click('input[name=email]');
    await page.type('input[name=email]', person.email);

    await page.click('textarea[name=message]');
    await page.type('textarea[name=message]', person.phone);

    await page.click('input[type=checkbox]');

    await page.click('button[type=submit]');
  
    browser.close();

  }, 3000000)
})