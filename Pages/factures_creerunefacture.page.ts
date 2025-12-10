import { Page, Locator } from '@playwright/test';
export class facturesCreerUneFacturePage {
  public  readonly facturesCreerUneFacturePage: Page;
  public readonly creerFactureButton: Locator;

  constructor(facturesCreerUneFacturePage: Page) {
    this.facturesCreerUneFacturePage = facturesCreerUneFacturePage;
    this.creerFactureButton = facturesCreerUneFacturePage.locator('button#create-invoice');
    }
    }
