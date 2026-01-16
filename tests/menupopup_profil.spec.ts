/** 
 * @description
 * @author Mouizah Oyékunlé
 * @date 13-01-2026
 * @version 1.0
 */

//importation des modules nécessaires
import { test, expect, Page } from '@playwright/test';
import { MenuPopupProfilPage } from '../Pages/menupopup_profil.page';
import { login, disconnect, clickSelector } from "../Utils/helpers";

// Variable globale
export let page                        : Page;
let menuPopupProfilPage: MenuPopupProfilPage;
let prenomModifie = "Mouizah01";
let nomModifie = "Oyekunle01";


// Before all test
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  menuPopupProfilPage = new MenuPopupProfilPage(page); // Instanciation
});

// After all test
test.afterAll(async () => {
  await page.close();
});

// Regroupage des scénarios de test
test.describe.serial('Menu Popup Profil Utilisateur', () => {

    test("connexion", async () => {
      await login(page);
    });
    test("cliquer sur le menu", async () => {
        await clickSelector(menuPopupProfilPage.boutonMenu, page);
    });
        test.describe('Modifier le profil', () => { 

            test("Cliquer sur le bouton profil", async () => { 
                await clickSelector(menuPopupProfilPage.boutonProfil,page);
            });

            test("Vérifier que le profil est bien visible", async () => {
                await expect(menuPopupProfilPage.popupModifierProfil).toBeVisible();
            });

            test("Modifier le Prénom ", async () => {
                await menuPopupProfilPage.inputPrenom.fill(prenomModifie);
            });

            test("Modifier le nom", async () => { 
                await menuPopupProfilPage.inputNom.fill(nomModifie);
            });

            test("Cliquer sur le bouton Enregistrer", async () => {
                await clickSelector(menuPopupProfilPage.boutonEnregistrer,page);
             });

        }); //describe 01

  });//describe serial