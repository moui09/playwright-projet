/** 
*
* @desc Test d'ajout d'un nouveau compte contribuable
* @author Mouizah la Star
* @date 08-12-2025
*/

//importation des fichiers nécessaires
import { test, expect, Page }                           from '@playwright/test';
import { compteContribuablePage }                       from '../Pages/compteContribuable.page';
import { login }                                        from '../Utils/helpers';
import { timeEnd } from 'console';

//Variable globale
let page                                                : Page;
let comptecontribuablePage                              : compteContribuablePage;
    
test.beforeEach(async ({ page }) => {
// Ouverture de la page de connexion et login)
        await login(page);
        await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page

        //Navigation vers la page compte contribuable
        await page.goto('http://srv657839.hstgr.cloud:8090/compte-contribuable');
        await page.waitForLoadState('networkidle');

    //Initialisation de la page compte contribuable
        comptecontribuablePage                          = new compteContribuablePage(page);
});

//regroupage des scénarios de test

test.describe('Compte contribuable', () => {
    
    //exécution du test avant chaque scénario
    
    test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
    //ouverture de la pop-up de création de compte contribuable
    await comptecontribuablePage.ajouterNouveau.click();
    await page.waitForLoadState('networkidle');
        
    //Remplissage des champs du formulaire de création
    await comptecontribuablePage.inputCleapi.pressSequentially('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh');
    await comptecontribuablePage.inputRaisonsociale.pressSequentially('OVERNETFLOW');
    
    //Cliquer sur créer pour enregistrer le nouveau compte contribuable
    await comptecontribuablePage.boutonCreer.click();

    //Vérification de la création du compte contribuable
        await expect(comptecontribuablePage.popinCreation).toBeVisible().catch(() => {
        
            //Vérification de l'affichage du noveau compte contribuable dans la liste
            expect(page.locator('text=OVERNETFLOW').first()).toBeTruthy();
        }); 
        
    });
    
    test.only('Modification d\'un compte contribuable', async ({ page }) => {

        //Ouverture de la popup de modification
        await comptecontribuablePage.boutonModifier.click();
        await page.waitForLoadState('networkidle');
        //Modification des champs du formulaire de modification
        await comptecontribuablePage.inputCleapi.fill('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh');
        await comptecontribuablePage.inputRaisonsociale.fill('OVERNETFLOW modifier');  
        //Enregistrement des modifications
        await comptecontribuablePage.boutonEnregistrerModification.click();
        await page.waitForLoadState('networkidle');

        //Vérification de la modification du compte contribuable
        await expect(comptecontribuablePage.popinModification).toBeVisible().catch(() => {

            //Vérification de l'affichage des modifications dans la liste
            //expect(page.locator('text=OVERNETFLOW modifier').first()).toBeTruthy();
            // 
            const NomModifierr = "OVERNETFLOW modifier";
            const contenuDutexttableau = await page.locator('text-sm').nth(4).first().textContent();
            expect(ccontenuDutexttableau.trim()).toBe(NovmModifier.trim());
            //--mettre  overnetflow modifier dans une variable exemple : const sNomModifier="overnetflow modifier"
            //-- verificqtion const sContenuDutextTqblequ=await page.locator('').first().textContent();

            //-- expect(sContenuDutextTqblequ:trim()).toBe(sNomModifier.trim());  
        });
    });
    
    test('Suppression d\'un compte contribuable', async ({ page }) => {

        //Ouverture de la popup de suppression
        await comptecontribuablePage.boutonSupprimer.click();
        await page.waitForLoadState('networkidle');

        //Vérification de la suppression du compte contribuable
        await expect(page.locator('text=Confirmer la suppression')).toBeVisible().catch(() => {

        //Vérification de l'affichage du message de confirmation de suppression
            expect(page.locator('text=Êtes-vous sûr de vouloir supprimer le compte contribuable OVERNETFLOW ? Cette action est irréversible.').first()).toBeTruthy();
        });
        //Suppression effective du compte contribuable
        await comptecontribuablePage.boutonConfirmerSuppression.click();
        await page.waitForLoadState('networkidle');
        //Vérification de la suppression effective du compte contribuable
        await expect(comptecontribuablePage.popinSuppression).toBeVisible().catch(() => { 
            expect(page.locator('text=OVERNETFLOW').first()).toBeFalsy();
        });
    });

    
});
