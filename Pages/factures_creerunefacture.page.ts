import { Page, Locator }                                      from '@playwright/test';
export class FacturesCreerUneFacturePage {
  public readonly facturesCreerUneFacturePage: Page;

  public readonly boutonCreerfacture: Locator;
  public readonly boutonDossier: Locator;
  public readonly boutonFactures: Locator;

  public readonly selectOptionDossier: Locator;

  public readonly buttonDossier: Locator;
  public readonly buttonDossierOption: Locator;


  constructor(facturesCreerUneFacturePage: Page) {
    this.facturesCreerUneFacturePage = facturesCreerUneFacturePage;

    this.boutonCreerfacture = facturesCreerUneFacturePage.locator('[data-slot="sidebar-content"] li[data-slot="sidebar-menu-sub-item"]').nth(4);
    this.boutonDossier = facturesCreerUneFacturePage.locator('button[data-slot="select-trigger"]').nth(0);
    this.boutonFactures = facturesCreerUneFacturePage.locator('button[data-slot="collapsible-trigger"]').nth(2);

    this.selectOptionDossier = facturesCreerUneFacturePage.locator('select[aria-hidden="true"] option[value="d4e341ff-3552-43ca-9b10-b081209a529a"]');

    this.buttonDossier = facturesCreerUneFacturePage.locator("button.border-input").nth(0);
    this.buttonDossierOption = facturesCreerUneFacturePage.locator("select option");
    
  }
}
