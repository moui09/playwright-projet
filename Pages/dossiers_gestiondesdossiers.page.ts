 /**
  * @description Page gestion des dossiers
  * @author  Mouizah Oyekunle
  * @version 1.0
  */

//importation des modules nécessaires
import { Locator, Page }                                    from '@playwright/test';
import { publicDecrypt } from 'crypto';

//exportation des classes
export class gestionDesdossiersPage {

    public readonly gestionDesdossiersPage                  : Page;
    
    public readonly divGestondesdossiers                    : Locator;
    public readonly divCompteContribuable                   : Locator;
    
    public readonly boutonCreerDossier                      : Locator;
    public readonly boutonDossiers                          : Locator;
    public readonly boutonComptecontribuable                : Locator;
    public readonly boutonFilter                            : Locator;
    public readonly boutonActiver                           : Locator;
    public readonly boutonConfirmeractivation: Locator;
    public readonly boutonCreationDos
    
    public readonly inputNomDossier                         : Locator;
    public readonly inputEtablissement                      : Locator;
    public readonly inputPointdevente                       : Locator;
    public readonly inputDatedebut                          : Locator;
    public readonly inputDatefin                            : Locator;
    public readonly inputRechercher                         : Locator;  
    
    public readonly tdNomdossier                            : Locator;
    
    public readonly popupActiverdossier                     : Locator;
    
    public readonly popinActiverDossier: Locator;
    
    
    
    constructor(gestionDesdossiersPage: Page) {
     
        this.gestionDesdossiersPage                         = gestionDesdossiersPage;
        
        //this.divGestondesdossiers                           =gestionDesdossiersPage.locator('button[data-slot="collapsible-trigger"]').nth(2);
        this.divGestondesdossiers = gestionDesdossiersPage.locator('a[data-slot="sidebar-menu-sub-button"]');
        this.divCompteContribuable = gestionDesdossiersPage.locator('div[class="p-1"] div').nth(0);

        this.boutonCreerDossier                             = gestionDesdossiersPage.locator('button[data-slot="button"]').nth(0);
        this.boutonDossiers                                 =gestionDesdossiersPage.locator('button[data-slot="collapsible-trigger"]').nth(1);
        this.boutonComptecontribuable = gestionDesdossiersPage.locator('button[data-slot="popover-trigger"]');
        this.boutonCreationDos                        = gestionDesdossiersPage.locator('div[data-slot="dialog-footer"] button').nth(1);

        this.inputNomDossier                                = gestionDesdossiersPage.locator('#nom');
        this.inputEtablissement                             = gestionDesdossiersPage.locator('#etablissement');
        this.inputPointdevente                              = gestionDesdossiersPage.locator('#pointDeVente');
        this.inputDatedebut                                 = gestionDesdossiersPage.locator('#dateDebut').nth(1);
        this.inputDatefin                                   = gestionDesdossiersPage.locator('#dateFin').nth(2);
        this.inputRechercher                                = gestionDesdossiersPage.locator('input[data-slot="input"]').nth(0);
        
        this.tdNomdossier                                   = gestionDesdossiersPage.locator('td[data-slot="table-cell"]').nth(2);
        
        this.boutonFilter                                   = gestionDesdossiersPage.locator('button[data-slot="select-trigger"]').nth(0);
        this.boutonActiver                                  = gestionDesdossiersPage.locator('button[data-slot="alert-dialog-trigger"]').nth(0);
        this.popupActiverdossier = gestionDesdossiersPage.locator('div[role="alertdialog"]').nth(0);
        this.boutonConfirmeractivation                      = gestionDesdossiersPage.locator('div[data-slot="alert-dialog-footer"] button').nth(1);

        this.popinActiverDossier = gestionDesdossiersPage.locator('section[aria-relevant="additions text"] li');
    }
    }