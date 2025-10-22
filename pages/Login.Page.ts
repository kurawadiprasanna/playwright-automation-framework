import { Page, Locator } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;
  readonly appLogo: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(LoginLocators.USERNAME_INPUT);
    this.passwordInput = page.locator(LoginLocators.PASSWORD_INPUT);
    this.signInButton = page.locator(LoginLocators.LOGIN_BUTTON);
    this.errorMessage = page.locator(LoginLocators.ERROR_MESSAGE);
    this.appLogo = page.locator(LoginLocators.APP_LOGO);
    this.shoppingCart = page.locator(LoginLocators.SHOPPING_CART);
  }

  async navigate() {
    // Sauce Demo's login page is the app root
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}