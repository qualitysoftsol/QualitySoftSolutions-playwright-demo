import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

export const test = base.extend({
  stepTest: async ({}, use) => {
    await use(async (name: string, action: () => Promise<void>) => {
      await allure.step(name, action);
    });
  },
});

export { expect } from '@playwright/test';
