import { test } from '@playwright/test';

test('debería ser omitido en Firefox', async ({ page, browserName }) => {
  // Esta prueba siempre aparecerá como SKIPPED en Allure.
  test.skip(browserName === 'firefox', 'Pendiente de arreglar en Firefox');
  // ...
});