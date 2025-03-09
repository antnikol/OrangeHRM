import { Page, Locator } from '@playwright/test';

class LoginPage {
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('input[placeholder="Username"]');
        this.passwordField = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button.orangehrm-login-button');
    }

    async fillUsernameField(username: string): Promise<void> {
        await this.usernameField.fill(username);
    }

    async fillPasswordField(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }
}

export { LoginPage };
