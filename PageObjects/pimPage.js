import { expect } from '@playwright/test';
import { BasePage } from '../PageObjects/basePage'; 


class PIMPage extends BasePage {
    constructor(page) {
        super(page);

        this.page = page;
        this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
        this.employeeListButton = page.getByRole('link', { name: 'Employee List' });
        this.firstNameField = page.getByPlaceholder('First Name');
        this.middleNameField = page.getByPlaceholder('Middle Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.createLoginDetailsButton = page.locator('.oxd-switch-wrapper label')
        this.usernameField = page.locator('//label[text()="Username"]/following::input[1]');
        this.passwordField = page.locator('//label[text()="Password"]/following::input[1]');
        this.confirmPasswordField = page.locator('//label[text()="Confirm Password"]/following::input[1]');
        this.statusEnabled = page.getByLabel('Enabled');
        this.personalDetailsHeader = page.locator('h6:has-text("Personal Details")');
        this.pencilIconForEdit = page.locator('.oxd-icon.bi-pencil-fill');   
        this.lastNameTableValue = page.locator('.oxd-table-cell.oxd-padding-cell').nth(3);
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.savePersonalDetailsButton = page.locator('button[type="submit"]').nth(0);
        this.successSavedMessage = page.locator('.oxd-toast--success')
        this.employeeAddPhotoButton = page.locator('.oxd-icon.bi-plus');
        this.fileInput = page.locator('input[type="file"]');
        this.filePreview = page.locator('img.employee-image[src^="data:image/jpeg;base64,"]');
    }

    async clickAddEmployeeButton(){
        await this.addEmployeeButton.click();
    }

    async fillFirstNameField(firstName){
        await this.firstNameField.fill(firstName);
    }

    async fillMiddleNameField(middleName){
        await this.middleNameField.fill(middleName);
    }

    async fillLastNameField(lastName){ 
        await this.lastNameField.fill(lastName);
    }

    async clickCreateLoginDetailsButton(){
        await this.createLoginDetailsButton.click();
    }

    async fillUsernameField(username){
        await this.usernameField.fill(username);
        return username;
    }

    async fillPasswordField(password){
        await this.passwordField.fill(password);
        return password;
    }

    async fillConfirmPasswordField(password){
        await this.confirmPasswordField.fill(password);
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }

    async checkStatusEnabled(){
        await this.statusEnabled.click({ force: true });
    }

    async clickFirstPencilIconForEdit(){
        await this.pencilIconForEdit.nth(0).click();
    }

    async getFirstLastNameTableValue() {
        return await this.lastNameTableValue.textContent();
    }

    async editLastNameInputValue(newLastName) {
        await this.lastNameInput.nth(0).fill(newLastName);
        return newLastName;
    }

    async clickSavePersonalDetailsButton() {
        await this.savePersonalDetailsButton.click();
    }

    async clickEmployeeListButton() {
        await this.employeeListButton.click();
    }

    async clickEmployeeAddPhotoButton() {
        await this.employeeAddPhotoButton.click();
    }

    async uploadFile(filePath) {
        await this.employeeAddPhotoButton.setInputFiles(filePath)
    }
}


module.exports = { PIMPage };
