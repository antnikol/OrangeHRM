import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page; 
        this.usernameField = page.locator('input[placeholder="Username"]');
        this.passwordField = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button.orangehrm-login-button');

        this.emailField = page.locator('input[ng-reflect-placeholder="Email"]');
        this.passwordField = page.locator('input[ng-reflect-placeholder="Password"]');
        this.checkboxPrivacy = page.locator('.mdc-checkbox__native-control').first();
        this.checkboxTerms = page.locator('.mdc-checkbox__native-control').last();
        this.signUpButton = page.locator('button.signup-button')
        this.successMessage = page.locator('.success-title')
    }

    async fillIUsernameField(username) {
        await this.usernameField.fill(username);
    }

    async fillLastNameField(lastName) {
        await this.lastNameField.fill(lastName);
    }

    async fillEmailField(email) {
        await this.emailField.fill(email);
    }

    async fillPasswordField(password) {
        await this.passwordField.fill(password);
    }

    async checkPolicyCheckbox(password) {
        await this.checkboxPrivacy.check()
    }

    async checkTermsCheckbox(password) {
        await this.checkboxTerms.check()
    }

    async clickSignUpButton() {
        await this.signUpButton.click()
    }
}

module.exports = { LoginPage };
