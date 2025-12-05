import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

test('Agregar producto al carrito', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(user, pass);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});