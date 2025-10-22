// locators/login.locators.ts

export class LoginLocators {
  // Input fields
  static readonly USERNAME_INPUT = '[data-test="username"]';
  static readonly PASSWORD_INPUT = '[data-test="password"]';
  
  // Buttons
  static readonly LOGIN_BUTTON = '[data-test="login-button"]';
  
  // Error messages
  static readonly ERROR_MESSAGE = '[data-test="error"]';
  static readonly ERROR_CLOSE_BUTTON = '.error-button';
  
  // Post-login elements (for verification)
  static readonly INVENTORY_CONTAINER = '.inventory_container';
  static readonly APP_LOGO = '.app_logo';
  static readonly SHOPPING_CART = '.shopping_cart_link';
}