import { Page } from '@playwright/test';

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  zip: string;
}

export class CheckoutStepOnePage {
  constructor(private page: Page) {}

  firstName = this.page.locator('#first-name');
  lastName = this.page.locator('#last-name');
  zip = this.page.locator('#postal-code');
  continueBtn = this.page.locator('#continue');

  async fillForm(data: CheckoutFormData) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.zip.fill(data.zip);
    await this.continueBtn.click();
  }
}