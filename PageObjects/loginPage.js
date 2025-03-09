import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page; 
        this.usernameField = page.locator('input[placeholder="Username"]');
        this.passwordField = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button.orangehrm-login-button');
    }

    async fillIUsernameField(username) {
        await this.usernameField.fill(username);
    }

    async fillpasswordField(password) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async gotoLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
    }
}

module.exports = { LoginPage };
