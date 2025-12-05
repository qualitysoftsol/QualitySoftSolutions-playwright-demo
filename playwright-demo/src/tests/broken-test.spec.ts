import { test, expect } from '../helpers/allureSteps';
import { LoginPage } from '../pages/LoginPage';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../env/.env') });

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

test('Login exitoso', async ({ page , stepTest }) => {
  const login = new LoginPage(page);

  await stepTest('Abrir página de login', async () => {
    await login.goto();
  });

  await stepTest('Ingresar credenciales', async () => {
    await login.login(user, pass);
  });

  await stepTest('Validar acceso exitoso', async () => {
    await expect(page).toHaveURL(/inventor/);
  });

  await page.click('#login-button');

});