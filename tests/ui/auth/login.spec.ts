// tests/login-json.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/Login.Page';
import testData from '../../../test-data/login-testdata.json';

test.describe('SauceDemo Login Tests - JSON Data Driven', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test.describe('Successful Login Tests', () => {
    for (const user of testData.validUsers) {
      test(`should successfully login with ${user.description}`, async ({ page }) => {
        // login with provided credentials
        await loginPage.login(user.username, user.password);
        await expect(loginPage.appLogo).toHaveText(user.expectedPostLogin.appLogoText);
        await expect(page).toHaveURL(new RegExp(user.expectedPostLogin.urlPattern));
      });
    }
  });
});