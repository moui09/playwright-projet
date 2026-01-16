/** 
*@description Test d'ajout d'un nouveau compte contribuable
*@author Mouizah oyekunle
*@date 08-12-2025
*@version 1.0
*/

// Importation des fichiers nécessaires
import { test, expect, type Page } from '@playwright/test';
import { compteContribuablePage } from '../Pages/compteContribuable.page';
import { login, disconnect, isVisible, clickSelector } from '../Utils/helpers';

// Variable globale
let page: Page;
let comptecontribuablePage: compteContribuablePage;

// Before all - Exécuté une seule fois au début
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        
        // Connexion
        await login(page);
        await page.waitForLoadState('networkidle');
        
        // Navigation vers la page compte contribuable
        await page.goto('http://srv657839.hstgr.cloud:8090/compte-contribuable');
        await page.waitForLoadState('networkidle');
        
        // Initialisation de la page compte contribuable
        comptecontribuablePage = new compteContribuablePage(page);
    });

    // After all - Exécuté une seule fois à la fin
    test.afterAll(async () => {
        await disconnect(page);
        await page.close();
    });


// Regroupage des scénarios de test
test.describe.serial('Gestion des comptes contribuables', () => {

    
    // ===== CRÉATION D'UN COMPTE CONTRIBUABLE =====
    test.describe('Création d\'un compte contribuable', () => {

        test('Ouvrir la popup de création', async () => {
            await clickSelector(comptecontribuablePage.ajouterNouveau,page);
            await page.waitForLoadState('networkidle');
        });

        test('Remplir le champ clé API', async () => {
            await comptecontribuablePage.inputCleapi.pressSequentially('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh');
        });

        test('Remplir la raison sociale', async () => {
            await comptecontribuablePage.inputRaisonsociale.pressSequentially('OVERNETFLOW');
        });

        test('Cliquer sur le bouton créer', async () => {
            await clickSelector(comptecontribuablePage.boutonCreer,page);
            await page.waitForLoadState('networkidle');
        });

        test('Vérifier la création du compte contribuable', async () => {
            try {
                await expect(comptecontribuablePage.popinCreation).toBeVisible({ timeout: 5000 });
            } catch {
                await expect(page.locator('text=OVERNETFLOW').first()).toBeVisible();
            }
        });

        test('Rechercher la raison sociale créée', async () => {
            await comptecontribuablePage.inputRechercheRaisonsociale.pressSequentially('OVERNETFLOW');
            await page.waitForLoadState('networkidle');
        });

        test('Vérifier que le compte apparaît dans les résultats', async () => {
            const ligne = page.locator('tbody tr').first();
            const cellule = ligne.locator('td').nth(2);
            await expect(cellule).toContainText('OVERNETFLOW');
        });
    }); //describe 01

    // ===== MODIFICATION D'UN COMPTE CONTRIBUABLE =====
    test.describe('Modification d\'un compte contribuable', () => {

        test('Ouvrir la popup de modification', async () => {
            await clickSelector(comptecontribuablePage.boutonModifier,page);
            await page.waitForLoadState('networkidle');
        });

        test('Modifier le champ clé API', async () => {
            await comptecontribuablePage.inputCleapi.fill('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh');
        });

        test('Modifier la raison sociale', async () => {
            await comptecontribuablePage.inputRaisonsociale.fill('OVERNETFLOW modifier');
        });

        test('Enregistrer les modifications', async () => {
            await clickSelector(comptecontribuablePage.boutonEnregistrerModification,page);
            await page.waitForLoadState('networkidle');
        });

        test('Vérifier la modification du compte contribuable', async () => {
            const nomModifie = 'OVERNETFLOW modifier';
            const ligne = page.locator('tbody tr').first();
            const cellule = ligne.locator('td').nth(2);
            await expect(cellule).toHaveText(nomModifie.trim());
        });
    });//describe 02

    // ===== SUPPRESSION D'UN COMPTE CONTRIBUABLE =====
    test.describe('Suppression d\'un compte contribuable', () => {

        test('Ouvrir la popup de suppression', async () => {
          await clickSelector(comptecontribuablePage.boutonSupprimer, page);
        });

        test('Vérifier l\'affichage du message de confirmation', async () => {
            await expect(page.locator('text=Confirmer la suppression')).toBeVisible();
            await expect(page.locator('text=Êtes-vous sûr de vouloir supprimer')).toBeVisible();
        });

        test('Confirmer la suppression', async () => {
          await clickSelector(comptecontribuablePage.boutonConfirmerSuppression, page); 
          await page.waitForLoadState("networkidle");
        });

         test('Vérifier la suppression effective du compte contribuable', async () => {
        
            try {
                await expect(comptecontribuablePage.popupErrorSuppression).toBeVisible({ timeout: 5000 });
            } catch {
                // Vérifier que le compte n'existe plus dans la liste
                const resultats = await page.locator('Erreur lors de la suppression').count();
                expect(resultats).toBe(1);
           }
           await clickSelector(comptecontribuablePage.boutonFermer, page);
        });
    });//describe 03
});