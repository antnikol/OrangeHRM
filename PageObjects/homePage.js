import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
        this.bannerAccept = page.locator('button[data-tid="banner-accept"]');
        this.loginButton = page.locator('text=Sign in');
        this.registerButton = page.locator('.signup-link');
        this.sportsSearchInput = page.locator('#mat-input-0');
        this.searchButton = page.locator('button:has-text("Search")');
        this.contactUsLink = page.locator('text=Contact Us');
        this.navigationMenu = page.locator('nav');
        this.footer = page.locator('.footer');
        this.languageSelector = page.locator('span.label');
        this.homeBanner = page.locator('.title.ng-star-inserted');
        this.cartIcon = page.locator('.cart-icon');
        this.featuredProduct = page.locator('.featured-product');
        this.subscribeButton = page.locator('button:has-text("Subscribe")');
        this.newsletterInput = page.locator('input[name="newsletter-email"]');
        this.eventsSection = page.locator('.wrap-events');  
        this.firstEvent = page.locator('div.event-name').first(); 
        this.eventsMenu = page.locator('a[href="/events"]').first()
        this.mainSearchInput = page.locator('input[placeholder="Search"]')
        this.searchButton = page.locator('mat-icon.search')
        this.event = page.locator('div.event-name') 
        this.eventsList = page.locator('ul.filter-list').nth(0)
    }

    async getEventsListCount(){
      return await this.eventsList.locator('li').count();
    }

    async getEventsText() {
      const eventText = await this.event.allTextContents();
      return eventText;
    }

    async getFirstEventText() {
      const eventText = await this.firstEvent.textContent();
      return eventText;
    }

    async clickSearchButton() {
      await this.searchButton.click(); 
    }

    async typeMainSearchInput(searchTerm) {
      await this.mainSearchInput.fill(searchTerm);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(2000)
    }

    async clickEventsMenu() {
      await this.eventsMenu.click(); 
    }
    async goto() {
        await this.page.goto('https://demouventex.com/');
    }

    async clickBannerAccept() {
      await this.bannerAccept.click();
  }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async searchForItem(itemName) {
        await this.sportsSearchInput.fill(itemName);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000)
    }

    async goToContactUsPage() {
        await this.contactUsLink.click();
    }

    async verifyPageTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async clickLanguageSelector(language) {
        await this.languageSelector.click();
        await this.page.locator(`div.locales div.locale:has-text('${language}')`).click()
    }

    async isBannerVisible() {
        await expect(this.homeBanner).toBeVisible();
    }

    async clickMenuOption(optionText) {
        const menuItem = this.navigationMenu.locator(`text=${optionText}`);
        await menuItem.click();
    }

    async isFooterVisible() {
        await expect(this.footer).toBeVisible();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }

    async isFeaturedProductVisible() {
        await expect(this.featuredProduct).toBeVisible();
    }

    async subscribeToNewsletter(email) {
        await this.newsletterInput.fill(email);
        await this.subscribeButton.click();
    }

    // Методи для перевірки подій
    async isEventsSectionVisible() {
        await expect(this.eventsSection).toBeVisible();
    }

    async isFirstEventVisible() {
        await expect(this.firstEvent).toBeVisible();
    }

    async clickFirstEvent() {
        await this.firstEvent.click();
    }

    async verifyEventDetails(expectedTitle, expectedDate) {
        const eventTitle = this.page.locator('.event-detail-title');
        const eventDate = this.page.locator('.event-detail-date');
        await expect(eventTitle).toHaveText(expectedTitle);
        await expect(eventDate).toHaveText(expectedDate);
    }
}

module.exports = { HomePage };
