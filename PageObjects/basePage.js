import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
        this.buttonPIM = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
        this.dropdownUserMenu = page.locator('.oxd-userdropdown-tab .oxd-userdropdown-icon')
        this.logoutButton = page.locator('a.oxd-userdropdown-link:has-text("Logout")')
        this.dashboardHeading = page.locator('h6.oxd-text:has-text("Dashboard")')
    }

    async clickButtonPIM(){
      await this.buttonPIM.click();
    }

    async clickDropdownUserMenu() {
        await this.dropdownUserMenu.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }
    

}

module.exports = { BasePage };
