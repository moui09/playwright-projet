/** 
*@description Test d'ajout d'un nouveau compte contribuable
*@author Mouizah oyekunle
*@date 16-01-2026
*@version 1.0
*/

// Importation des fichiers nécessaires
import { test, expect, type Page } from '@playwright/test';
import { organisationParametresPage } from "../Pages/oragnistion_parametres.page";
import { login, disconnect, isVisible, clickSelector } from '../Utils/helpers';


// Variable globale
let page: Page;
let organisationparametrespage: organisationParametresPage;

// Before all - Exécuté une seule fois au début
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        
        // Connexion
        await login(page);
        await page.waitForLoadState('networkidle');
        
        // Initialisation de la page compte contribuable
        organisationparametrespage = new organisationParametresPage(page);
    });

    // After all - Exécuté une seule fois à la fin
    test.afterAll(async () => {
        await disconnect(page);
        await page.close();
    });


// Regroupage des scénarios de test
test.describe.serial("Paramètres de l organisation", () => {


    test.describe("Modification des données de l'organisation", () => {
      
        test("Cliquer sur paramètres", async () => {
            await page.waitForTimeout(3000);
            await clickSelector(organisationparametrespage.liParametres, page);
        });

        const Nom = "FNE";
        test("Changer le nom de l'organisation", async () => {
        await page.waitForTimeout(3000);
        await organisationparametrespage.inputNom.fill(Nom);
    });
        const Description = "Digitalisation des factures";
        test("Changer la description ", async () => {
            await page.waitForTimeout(3000);
            await organisationparametrespage.inputDescription.fill(Description);
        });
        test("Cliquer sur le bouton Sauvegarder", async () => {
            await page.waitForTimeout(3000);
            await clickSelector(organisationparametrespage.boutonSauvegarder, page);
        });
    });// describe 01
    
});