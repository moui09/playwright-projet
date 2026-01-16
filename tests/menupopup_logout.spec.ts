/**
 * @description Déconnexion de l'utilisateur via le menu popup
 * @author Mouizah Oyékunlé
 * @date 13-01-2026
 * @version 1.0
 */
 //importation des modules nécessaires
import { test, expect, Page } from '@playwright/test';
import { MenuPopupLogoutPage } from '../Pages/menupopup_logout.page';
import { login, clickSelector } from "../Utils/helpers";

//variable globale 
export let page: Page;
let menuPopupLogoutPage: MenuPopupLogoutPage;

// Before all test          
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); 
    menuPopupLogoutPage = new MenuPopupLogoutPage(page); // Instanciation
});
// After all test
test.afterAll(async () => {
    await page.close();
});

// Regroupage des scénarios de test
test.describe.serial('Menu Popup Profil Utilisateur - Nettoyage', () => {

    test("connexion", async () => {
        await login(page);
    });
    test.describe('Se déconnecter', () => {

        test("cliquer sur le menu", async () => {
            await clickSelector(menuPopupLogoutPage.boutonMenu, page);
        });

        test("Cliquer sur le bouton de déconnexion", async () => { 
            await clickSelector(menuPopupLogoutPage.boutonLogOut, page);
        });

        /*test("Vérifier que le popin est visible", async () => {
            await expect(menuPopupLogoutPage.popin).toBeVisible();
         });*/
    });//describe 01
}); //describe serial