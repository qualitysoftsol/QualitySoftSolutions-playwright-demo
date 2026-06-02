import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

type StepTestFixture = {
  stepTest: (name: string, action: () => Promise<void>) => Promise<void>;
};

export const test = base.extend<StepTestFixture>({
  stepTest: async ({}, use) => {
    await use(async (name: string, action: () => Promise<void>) => {
      await allure.step(name, action);
    });
  },
});

export { expect } from '@playwright/test';
