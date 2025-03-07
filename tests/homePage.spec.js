import { test, expect } from '@playwright/test'
import { HomePage } from'../PageObjects/homePage'


test.describe ('Home page', () => {

  test('Comparison of the design of the SignIn button with saved images from the designer', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    const screenshot = await homePage.loginButton.screenshot()
  
    await expect(page.locator('.signin-button')).toHaveScreenshot('signIn.png', { update: 'missing' });

  })  

  test('Go to the login page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.clickLogin()
      await expect(await page.locator('.desk-title')).toContainText('Sign in')
  });

  test('Go to the registration page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.clickBannerAccept()
      await homePage.clickLogin()
      await homePage.clickRegister()
      await expect(await page.locator('.desk-title')).toContainText('Sign up')
  });

  test('Checking the search field for "Sports"', async ({ page }) => {
      await page.setViewportSize({ width: 1800, height: 1000 })
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.searchForItem('ai')
      await expect(await homePage.getEventsListCount()).toBe(2)
  });

  test('Checking the main search box for the "Events" and "Studios" categories', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.clickBannerAccept()
      await homePage.clickSearchButton()
      await homePage.typeMainSearchInput('karate')
      const eventTexts = await homePage.getEventsText()
      eventTexts.forEach((text) => {
        console.log('Text:', text)
        expect(text.toLowerCase()).toContain('karate')
      });
  })

  test('Go to the "Events" page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.clickEventsMenu()
      await expect(page).toHaveURL(/.*\/events/)
  });

  test('Check the home page title', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.verifyPageTitle('Uventex Sports Hub')
  });

  test('Choose the site language', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.clickLanguageSelector('Українська')
      await expect(await page.locator('button.signin-button')).toHaveText('Увійти')
  });

  test('Checking the visibility of the carousel on the home page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.isBannerVisible()
  });

  test('Checking the visibility of the footer on the home page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.isFooterVisible()
  });

  test('Checking the visibility of the events section', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.isEventsSectionVisible()
  });

  test('Checking the visibility of the first event', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await homePage.isFirstEventVisible()
  })

  test('Check details of the first event', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      const text = await homePage.getFirstEventText()
      await homePage.clickFirstEvent()
      await expect(await page.locator('.event-title')).toContainText(text)
  });


})