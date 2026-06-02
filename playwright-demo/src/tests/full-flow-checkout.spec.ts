import { test, expect } from '../helpers/allureSteps';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import usersData from '../data/users.json';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

test('Flujo completo de compra', async ({ page, stepTest }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const step1 = new CheckoutStepOnePage(page);
  const step2 = new CheckoutStepTwoPage(page);
  const complete = new CheckoutCompletePage(page);

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

  await stepTest('Iniciar proceso de checkout', async () => {
    await cart.checkout();
  });

  await stepTest('Completar formulario de envío', async () => {
    await step1.fillForm(usersData.checkout);
  });

  await stepTest('Confirmar orden', async () => {
    await step2.finish();
  });

  await stepTest('Validar confirmación de compra', async () => {
    await expect(complete.title).toContainText('Thank you for your order!');
  });
});