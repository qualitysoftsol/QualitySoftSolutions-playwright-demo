import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

test('Flujo completo de compra', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const step1 = new CheckoutStepOnePage(page);
  const step2 = new CheckoutStepTwoPage(page);
  const complete = new CheckoutCompletePage(page);

  await login.goto();
  await login.login(user, pass);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await cart.checkout();
  await step1.fillForm();
  await step2.finish();

  await expect(complete.title).toContainText('Thank you for your order!');
});