/**
 * @description Afficher une Factures Brouillon
 * @date 06-12-2025
 * @author  Mouizah Oyekunle
 * @version 1.0
 */

//impotationdes modules nécessaires
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
test.describe.serial("Factures Brouillon", async () => { 

    test("Connexion", async () => {
        await login(page);
    });

    test.describe("Affichage des factures brouillon", async () => { 

    });//describe 01

    test("Déconnexion", async () => {
        await disconnect(page);
    });//test déconnexion
});//describe global