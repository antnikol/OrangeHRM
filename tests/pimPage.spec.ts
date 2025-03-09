import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../PageObjects/loginPage.ts';
import { BasePage } from '../PageObjects/basePage.ts';
import { PIMPage } from '../PageObjects/pimPage.ts';

import { userTestData } from '../fixtures/genUser';
import text from "../fixtures/text.json" assert { type: "json" };

const genUser = userTestData();

test.describe('Tests for the employee management functionality in the OrangeHRM system', () => {

  test.beforeEach(async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.fillUsernameField(genUser.adminUsername);
    await loginPage.fillPasswordField(genUser.adminPassword);
    await loginPage.clickLoginButton();
  });

  test('Adding a New Employee from Administrator account', async ({ page }: { page: Page }) => {
    const pimPage = new PIMPage(page);

    await pimPage.clickButtonPIM();
    await pimPage.clickAddEmployeeButton();
    await pimPage.fillFirstNameField(genUser.firstname);
    await pimPage.fillMiddleNameField(genUser.middlename);
    await pimPage.fillLastNameField(genUser.lastname);
    await pimPage.clickCreateLoginDetailsButton();
    await pimPage.fillUsernameField(genUser.username);
    const password = await pimPage.fillPasswordField(genUser.password);
    await pimPage.fillConfirmPasswordField(password);
    await pimPage.checkStatusEnabled();
    await pimPage.clickSaveButton();

    await expect(await pimPage.successSavedMessage).toBeVisible();
    await expect(await pimPage.personalDetailsHeader).toContainText(text.pimPage.personalDetailsHeader);
  });

  test('Verify that a new User can be logged in after registering as a new Employee', async ({ page }: { page: Page }) => {
    const pimPage = new PIMPage(page);
    const loginPage = new LoginPage(page);
    const basePage = new BasePage(page);

    await pimPage.clickButtonPIM();
    await pimPage.clickAddEmployeeButton();
    await pimPage.fillFirstNameField(genUser.firstname);
    await pimPage.fillMiddleNameField(genUser.middlename);
    await pimPage.fillLastNameField(genUser.lastname);
    await pimPage.clickCreateLoginDetailsButton();
    const username = await pimPage.fillUsernameField(genUser.username);
    const password = await pimPage.fillPasswordField(genUser.password);
    await pimPage.fillConfirmPasswordField(password);
    await pimPage.checkStatusEnabled();
    await pimPage.clickSaveButton();
    await page.waitForTimeout(2000);

    await expect(await pimPage.successSavedMessage).toBeVisible();
    await expect(await pimPage.personalDetailsHeader).toContainText(text.pimPage.personalDetailsHeader);

    await pimPage.clickDropdownUserMenu();
    await pimPage.clickLogoutButton();
    await loginPage.fillUsernameField(username);
    await loginPage.fillPasswordField(password);
    await loginPage.clickLoginButton();
    await expect(await basePage.dashboardHeading).toContainText(text.basePage.dashboardHeading);
  });

  test('Verify that an administrator can successfully edit an employee\'s details', async ({ page }: { page: Page }) => {
    const pimPage = new PIMPage(page);
    const loginPage = new LoginPage(page);
    const basePage = new BasePage(page);

    await pimPage.clickButtonPIM();
    await pimPage.clickAddEmployeeButton();
    await pimPage.fillFirstNameField(genUser.firstname);
    await pimPage.fillMiddleNameField(genUser.middlename);
    await pimPage.fillLastNameField(genUser.lastname);
    await pimPage.clickCreateLoginDetailsButton();
    await pimPage.fillUsernameField(genUser.username);
    const password = await pimPage.fillPasswordField(genUser.password);
    await pimPage.fillConfirmPasswordField(password);
    await pimPage.checkStatusEnabled();
    await pimPage.clickSaveButton();

    await expect(await pimPage.successSavedMessage).toBeVisible();
    await expect(await pimPage.personalDetailsHeader).toContainText(text.pimPage.personalDetailsHeader);

    await pimPage.clickDropdownUserMenu();
    await pimPage.clickLogoutButton();
    await loginPage.fillUsernameField(genUser.adminUsername);
    await loginPage.fillPasswordField(genUser.adminPassword);
    await loginPage.clickLoginButton();
    await expect(await basePage.dashboardHeading).toContainText(text.basePage.dashboardHeading);

    await pimPage.clickButtonPIM();
    await expect(page).toHaveURL(text.pimPage.url);

    await pimPage.clickFirstPencilIconForEdit();
    const newLastName = await pimPage.editLastNameInputValue(text.pimPage.editedLastName);
    await pimPage.clickSavePersonalDetailsButton();
    await expect(await pimPage.successSavedMessage).toBeVisible();

    await pimPage.clickEmployeeListButton();
    await expect(await pimPage.getFirstLastNameTableValue()).toBe(newLastName);
  });

});
