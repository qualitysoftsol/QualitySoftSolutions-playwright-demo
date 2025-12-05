import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  constructor(private page: Page) {}

  firstName = this.page.locator('#first-name');
  lastName = this.page.locator('#last-name');
  zip = this.page.locator('#postal-code');
  continueBtn = this.page.locator('#continue');

  async fillForm() {
    await this.firstName.fill('John');
    await this.lastName.fill('Tester');
    await this.zip.fill('110111');
    await this.continueBtn.click();
  }
}