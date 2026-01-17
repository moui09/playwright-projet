/** 
*@description Test d'ajout d'un nouveau compte contribuable
*@author Mouizah oyekunle
*@date 16-01-2026
*@version 1.0
*/

// Importation des fichiers nécessaires
import { test, expect, type Page } from '@playwright/test';
import { facturesTableauDeBord } from "../Pages/factures_tableaudebord.page";
import { login, disconnect, isVisible, clickSelector } from '../Utils/helpers';

// Variable globale
let page: Page;
let facturestableaudebord: facturesTableauDeBord;

// Before all - Exécuté une seule fois au début
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        
        // Connexion
        await login(page);
        await page.waitForLoadState('networkidle');
        
        // Initialisation de la page compte contribuable
        facturestableaudebord = new facturesTableauDeBord(page);
    });

    // After all - Exécuté une seule fois à la fin
    test.afterAll(async () => {
        await disconnect(page);
        await page.close();
    });


// Regroupage des scénarios de test
test.describe.serial("Organisation vue d'ensemble", () => {

    test("Cliquer sur le bouton Factures", async () => {
                await clickSelector(facturestableaudebord.boutonFactures, page);
                await page.waitForTimeout(2000);
                console.log("Bouton Factures cliqué avec succès");
             });
    
    test("Tableau de bord", async () => {
        await page.waitForTimeout(2000);
        await clickSelector(facturestableaudebord.aTableaudebord, page);
    });
  test.describe("Scroll", () => {

      test("défiler sur une page", async ({ }) => {
        await page.waitForTimeout(2000);
          await clickSelector(facturestableaudebord.divTableau, page);
          await page.waitForTimeout(2000);
            await facturestableaudebord.divTableau.scrollIntoViewIfNeeded();
    });
  });//
});