import { test, expect } from '../helpers/allureSteps';
import { LoginPage } from '../pages/LoginPage';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

test('Login exitoso', async ({ page , stepTest }) => {
  const login = new LoginPage(page);

  await stepTest('Abrir página de login', async () => {
    await login.goto();
  });

  await stepTest('Ingresar credenciales', async () => {
    await login.login(user, pass);
  });

  await stepTest('Validar acceso exitoso', async () => {
    await expect(page).toHaveURL(/inventory/);
  });
});