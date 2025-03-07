import { expect } from '@playwright/test';

class SignUp {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('input[ng-reflect-placeholder="First name"]');
        this.lastNameField = page.locator('input[ng-reflect-placeholder="Last name"]');
        this.emailField = page.locator('input[ng-reflect-placeholder="Email"]');
        this.passwordField = page.locator('input[ng-reflect-placeholder="Password"]');
        this.checkboxPrivacy = page.locator('.mdc-checkbox__native-control').first();
        this.checkboxTerms = page.locator('.mdc-checkbox__native-control').last();
        this.signUpButton = page.locator('button.signup-button')
        this.successMessage = page.locator('.success-title')
    }

    async fillFirstNameField(firstName) {
        await this.firstNameField.fill(firstName);
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

module.exports = { SignUp };
