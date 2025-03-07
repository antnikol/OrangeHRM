import { test, expect } from '@playwright/test'
import { HomePage } from'../PageObjects/homePage'
import { SignUp } from '../PageObjects/signUp'


test.describe ('Negative tests of system behavior when trying to register a new user', () => {

  test('Negative test: Input field contains only spaces', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUp = new SignUp(page)

    await homePage.goto();
    await homePage.clickLogin();
    await homePage.clickBannerAccept();
    await homePage.clickRegister();

    await signUp.fillFirstNameField(' ');
    await signUp.fillLastNameField(' '); 
    await signUp.fillEmailField('bakamuna@yopmail.com')
    await signUp.fillPasswordField('1223_asf')
    await signUp.checkPolicyCheckbox()
    await signUp.checkTermsCheckbox()
    await signUp.clickSignUpButton()

    await expect(await signUp.successMessage).not.toContainText('Success')
  });
    

  test('Negative test: re-registration of a user with an already registered Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUp = new SignUp(page)

    await homePage.goto();
    await homePage.clickLogin();
    await homePage.clickBannerAccept();
    await homePage.clickRegister();

    await signUp.fillFirstNameField(' '); 
    await signUp.fillLastNameField(' ');  
    await signUp.fillEmailField('bakamuna@yopmail.com')
    await signUp.fillPasswordField('1223_asf')
    await signUp.checkPolicyCheckbox()
    await signUp.checkTermsCheckbox()
    await signUp.clickSignUpButton()

    await expect(await signUp.successMessage).not.toContainText('Success')
  });
})