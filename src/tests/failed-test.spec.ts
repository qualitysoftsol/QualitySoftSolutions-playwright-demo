import { test, expect } from '@playwright/test';

test('debería fallar por un error en el setup', async ({ page }) => {
  // ERROR: El dominio "pagina-no-existe" no es válido o está caído.
  await page.goto('https://pagina-no-existe-12345.com'); 
  // La prueba fallará aquí antes de la aserción.
  await expect(page).toHaveTitle('Inicio');
});