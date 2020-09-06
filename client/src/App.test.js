// Imports
// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

// H1 Sample test
describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.header-title');

    const html = await page.$eval('.header-title', e => e.innerHTML);
    expect(html).toBe('Rouge Discord Bot');

    browser.close();
  }, 16000);
});

// Prefix Form Test
describe('Login', () => {
  test('Can login with discord', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 550
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000');
    await page.waitForSelector('#loginBtn');
    await page.click('#loginBtn');

    browser.close();
  }, 9000000);
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
