
import { Page, Locator } from '@playwright/test';

export class compteContribuablePage {

  public  readonly compteContribuablePage                        : Page;
  public  readonly ajouterNouveau                                : Locator;
  public  readonly afficheCreation                               : Locator; 
   
  public  readonly inputCleapi                                   : Locator;
  public  readonly inputRaisonsociale                            : Locator;
  
  public  readonly boutonCreer                                   : Locator;
  public  readonly boutonSupprimer                               : Locator;
  public  readonly boutonConfirmerSuppression                    : Locator;
  public  readonly boutonModifier                                : Locator;
  public  readonly boutonEnregistrerModification                 : Locator;
  
  //popins
  public  readonly popinModification                             : Locator;
  public  readonly popinSuppression                              : Locator;
  public  readonly popinCreation                                 : Locator;

  constructor(compteContribuablePage: Page) {
    this.compteContribuablePage                                  = compteContribuablePage;
    //this.ajouterNouveau = compteContribuablePage.locator('inline-flex items-center').nth(11);
    this.ajouterNouveau                                          = compteContribuablePage.locator('button:has-text("Nouveau")');
    this.afficheCreation                                         = compteContribuablePage.locator('text=OVERNETFLOW');
    
    this.inputCleapi                                             = compteContribuablePage.locator('#cleApi');
    this.inputRaisonsociale                                      = compteContribuablePage.locator('#raisonSociale');
    
    this.boutonCreer                                             = compteContribuablePage.locator('button:has-text("Créer")');
    this.boutonSupprimer                                         = compteContribuablePage.locator('button:has-text("Supprimer")').first();
    this.boutonConfirmerSuppression                              = compteContribuablePage.locator('div[data-slot="alert-dialog-footer"] button').nth(1);
    this.boutonModifier                                          = compteContribuablePage.locator('div[class="flex items-center justify-end gap-2"] button').nth(0);
    this.boutonEnregistrerModification                           = compteContribuablePage.locator('div[data-slot="dialog-footer"] button').nth(1);
    
    this.popinCreation                                           = compteContribuablePage.locator('li[data-sonner-toast]');
    this.popinModification                                       = compteContribuablePage.locator('li[data-sonner-toast]');
    this.popinSuppression                                        = compteContribuablePage.locator('li[data-sonner-toast]');
    

    
    }
    }
