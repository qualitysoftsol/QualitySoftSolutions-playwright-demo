import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../env/.env') });

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

test('Agregar producto al carrito', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(user, pass);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});