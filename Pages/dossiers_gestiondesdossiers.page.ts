 /**
  * @description Page gestion des dossiers
  * @author  Mouizah Oyekunle
  * @version 1.0
  */

//importation des modules nécessaires
import { Locator, Page }                                    from '@playwright/test';

//exportation des classes
export class gestionDesdossiersPage {

    public readonly gestionDesdossiersPage                  : Page;
    public readonly boutonCreerDossier                      : Locator;
    
    constructor(gestionDesdossiersPage: Page) {
     
        this.gestionDesdossiersPage                         = gestionDesdossiersPage;

        this.boutonCreerDossier                             = gestionDesdossiersPage.locator('div[class="flex gap-3"] button').nth(0);
        
    }
    }