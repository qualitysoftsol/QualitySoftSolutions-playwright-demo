// DEMO: este test está roto intencionalmente para mostrar cómo Playwright
// captura, reporta y evidencia fallos en el reporte de Allure.
//
// Bugs introducidos a propósito:
//   1. URL incorrecta: /inventor/ en lugar de /inventory/ → falla la aserción
//   2. Click en #login-button después de estar autenticado → paso inválido
//   3. Nombre duplicado con login.spec.ts → demuestra conflicto en reportes
import { test, expect } from '../helpers/allureSteps';
import { LoginPage } from '../pages/LoginPage';

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

if (!user || !pass) {
  throw new Error('Environment variables USER_NAME and PASSWORD are not set. Ensure env/.env exists and is loaded (playwright.config.ts should call dotenv).');
}

// test.fail() le indica a Playwright que este test se espera que falle.
// Si pasa, Playwright lo marca como error inesperado.
test.fail();
test('Login exitoso - broken (intencional)', async ({ page, stepTest }) => {
  const login = new LoginPage(page);

  await stepTest('Abrir página de login', async () => {
    await login.goto();
  });

  await stepTest('Ingresar credenciales', async () => {
    await login.login(user, pass);
  });

  // Bug 1: typo en la URL esperada (/inventor/ en vez de /inventory/)
  await stepTest('Validar acceso exitoso', async () => {
    await expect(page).toHaveURL(/inventor/);
  });

  // Bug 2: click en login-button estando ya autenticado (paso inválido)
  await page.click('#login-button');
});