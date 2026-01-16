/**0
 * @description Création, Modification, Suppression d'une facture 
 * @date 06-12-2025
 * @author  Mouizah Oyekunle
 * @version 1.0
 */

//importation des modules nécessaires
import { test, expect, Page } from '@playwright/test';
import { FacturesCreerUneFacturePage } from '../Pages/factures_creerunefacture.page';
import { login, disconnect, clickSelector } from "../Utils/helpers";

//variable globale
export let page: Page;
let facturesCreerUneFacturePage: FacturesCreerUneFacturePage;

//Befor all test
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    facturesCreerUneFacturePage = new FacturesCreerUneFacturePage(page); //Instanciation
});
//After all test
test.afterAll(async () => {
    await page.close();
});
//Regroupage des scénarios de test
test.describe.serial("Factures", async () => {

    test("Connexion", async () => {
        await login(page);
    });

    test.describe("Création d'une facture", async () => {

        test("Cliquer sur le bouton Factures", async () => {
            await clickSelector(facturesCreerUneFacturePage.boutonFactures, page);
            await page.waitForTimeout(8000);
            console.log("Bouton Factures cliqué avec succès");
         });

        test("Cliquer sur le bouton Créer une facture", async () => {
            await clickSelector(facturesCreerUneFacturePage.boutonCreerfacture, page);
            await page.waitForTimeout(8000);
            console.log("Bouton Créer une facture cliqué avec succès");
        });

        test("cliquer sur la liste déroulante ", async () => {
            await clickSelector(facturesCreerUneFacturePage.boutonDossier, page);
            await page.waitForTimeout(8000);
        });
        
        test("Sélectionner un dossier", async () => { 
            console.log("Sélection du dossier en cours...");
            //instance de l'option dossier
            /*const dossierOption = page.locator('select >> option:has-text("OVERNETFLOW FAYA - OVERNETFLOW-FAYA")');
            await dossierOption.click();*/

            await facturesCreerUneFacturePage.buttonDossier.click();
            await page.waitForTimeout(8000);
            await facturesCreerUneFacturePage.buttonDossierOption.getByText("OVERNETFLOW FAYA - OVERNETFLOW-FAYA").click({force: true});
            console.log("Dossier sélectionné avec succès");
        });

    });// describe 01
    
    test.describe("Modification d'une facture", async () => {
        
    });//describe 02

    test.describe("Suppression d'une facture", async () => { 

    });//describe 03


}); //describe serial