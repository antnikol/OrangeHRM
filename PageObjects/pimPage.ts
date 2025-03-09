import { Page, Locator } from '@playwright/test';
import { BasePage } from '../PageObjects/basePage';

class PIMPage extends BasePage {
    addEmployeeButton: Locator;
    employeeListButton: Locator;
    firstNameField: Locator;
    middleNameField: Locator;
    lastNameField: Locator;
    saveButton: Locator;
    createLoginDetailsButton: Locator;
    usernameField: Locator;
    passwordField: Locator;
    confirmPasswordField: Locator;
    statusEnabled: Locator;
    personalDetailsHeader: Locator;
    pencilIconForEdit: Locator;
    lastNameTableValue: Locator;
    lastNameInput: Locator;
    savePersonalDetailsButton: Locator;
    successSavedMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.page = page;
        this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
        this.employeeListButton = page.getByRole('link', { name: 'Employee List' });
        this.firstNameField = page.getByPlaceholder('First Name');
        this.middleNameField = page.getByPlaceholder('Middle Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.createLoginDetailsButton = page.locator('.oxd-switch-wrapper label');
        this.usernameField = page.locator('//label[text()="Username"]/following::input[1]');
        this.passwordField = page.locator('//label[text()="Password"]/following::input[1]');
        this.confirmPasswordField = page.locator('//label[text()="Confirm Password"]/following::input[1]');
        this.statusEnabled = page.getByLabel('Enabled');
        this.personalDetailsHeader = page.locator('h6:has-text("Personal Details")');
        this.pencilIconForEdit = page.locator('.oxd-icon.bi-pencil-fill');
        this.lastNameTableValue = page.locator('.oxd-table-cell.oxd-padding-cell').nth(3);
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.savePersonalDetailsButton = page.locator('button[type="submit"]').nth(0);
        this.successSavedMessage = page.locator('.oxd-toast--success');
    }

    async clickAddEmployeeButton(): Promise<void> {
        await this.addEmployeeButton.click();
    }

    async fillFirstNameField(firstName: string): Promise<void> {
        await this.firstNameField.fill(firstName);
    }

    async fillMiddleNameField(middleName: string): Promise<void> {
        await this.middleNameField.fill(middleName);
    }

    async fillLastNameField(lastName: string): Promise<void> {
        await this.lastNameField.fill(lastName);
    }

    async clickCreateLoginDetailsButton(): Promise<void> {
        await this.createLoginDetailsButton.click();
    }

    async fillUsernameField(username: string): Promise<string> {
        await this.usernameField.fill(username);
        return username;
    }

    async fillPasswordField(password: string): Promise<string> {
        await this.passwordField.fill(password);
        return password;
    }

    async fillConfirmPasswordField(password: string): Promise<void> {
        await this.confirmPasswordField.fill(password);
    }

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }

    async checkStatusEnabled(): Promise<void> {
        await this.statusEnabled.click({ force: true });
    }

    async clickFirstPencilIconForEdit(): Promise<void> {
        await this.pencilIconForEdit.nth(0).click();
    }

    async getFirstLastNameTableValue(): Promise<string> {
        return (await this.lastNameTableValue.textContent()) ?? '';
    }

    async editLastNameInputValue(newLastName: string): Promise<string> {
        await this.lastNameInput.nth(0).fill(newLastName);
        return newLastName;
    }

    async clickSavePersonalDetailsButton(): Promise<void> {
        await this.savePersonalDetailsButton.click();
    }

    async clickEmployeeListButton(): Promise<void> {
        await this.employeeListButton.click();
    }
}

export { PIMPage };
