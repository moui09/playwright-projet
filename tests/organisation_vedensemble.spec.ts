
/** 
*@description Test d'ajout d'un nouveau compte contribuable
*@author Mouizah oyekunle
*@date 16-01-2026
*@version 1.0
*/

// Importation des fichiers nécessaires
import { test, expect, type Page } from '@playwright/test';
import { organisationVueDEnsemblePage } from '../Pages/organisation_vuedensemble.page';
import { login, disconnect, isVisible, clickSelector } from '../Utils/helpers';

// Variable globale
let page: Page;
let organisationvuedensemblepage: organisationVueDEnsemblePage;

// Before all - Exécuté une seule fois au début
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        
        // Connexion
        await login(page);
        await page.waitForLoadState('networkidle');
        
        // Initialisation de la page compte contribuable
        organisationvuedensemblepage = new organisationVueDEnsemblePage(page);
    });

    // After all - Exécuté une seule fois à la fin
    test.afterAll(async () => {
        await disconnect(page);
        await page.close();
    });


// Regroupage des scénarios de test
test.describe.serial("Organisation vue d'ensemble", () => {

  test.describe("Scroll", () => {

    test("défiler sur une page", async ({ }) => {
      await clickSelector(organisationvuedensemblepage.divVueDensemble, page);
      await organisationvuedensemblepage.divVueDensemble.scrollIntoViewIfNeeded();
    });
  });//
});
