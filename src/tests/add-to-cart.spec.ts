import { test, expect } from '../helpers/allureSteps';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

test('Agregar producto al carrito', async ({ page, stepTest }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await stepTest('Abrir página de login', async () => {
    await login.goto();
  });

  await stepTest('Ingresar credenciales', async () => {
    await login.login(user, pass);
  });

  await stepTest('Agregar producto al carrito', async () => {
    await inventory.addItemToCart();
  });

  await stepTest('Navegar al carrito', async () => {
    await inventory.goToCart();
  });

  await stepTest('Validar URL del carrito', async () => {
    await expect(page).toHaveURL(/cart/);
  });
});