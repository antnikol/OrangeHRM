import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;  
    public buttonPIM: Locator;
    public dropdownUserMenu: Locator;
    public logoutButton: Locator;
    public dashboardHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonPIM = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
        this.dropdownUserMenu = page.locator('.oxd-userdropdown-tab .oxd-userdropdown-icon');
        this.logoutButton = page.locator('a.oxd-userdropdown-link:has-text("Logout")');
        this.dashboardHeading = page.locator('h6.oxd-text:has-text("Dashboard")');
    }

    async clickButtonPIM(): Promise<void> {
        await this.buttonPIM.click();
    }

    async clickDropdownUserMenu(): Promise<void> {
        await this.dropdownUserMenu.click();
    }

    async clickLogoutButton(): Promise<void> {
        await this.logoutButton.click();
    }
}
