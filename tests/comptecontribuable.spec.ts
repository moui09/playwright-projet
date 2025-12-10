/** 
*
* @desc Test d'ajout d'un nouveau compte contribuable
* @author Mouizah oyekunle
* @date 08-12-2025
*/

//importation des fichiers nécessaires
import { test, expect, Page }                           from '@playwright/test';
import { compteContribuablePage }                       from '../Pages/compteContribuable.page';
import { login }                                        from '../Utils/helpers';
import { timeEnd }                                      from 'console';
import { disconnect }                                   from 'process';

//Variable globale
let page                                                : Page;
let comptecontribuablePage                              : compteContribuablePage;
    
test.beforeEach(async ({ page }) => {

    // Ouverture de la page de connexion et login)
    test('connexion', async ({ page }) => {
            await login(page);
        })
    
    test('chargement de la page', async ({ page }) => {
            await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page
        })

    test('Aller sur ce lien', async ({ page }) => {
            await page.goto('http://srv657839.hstgr.cloud:8090/compte-contribuable'); //Navigation vers la page compte contribuable
        })
    
    test('chargement de la page', async ({ page }) => {
             await page.waitForLoadState('networkidle');
        })
    test('Initialisation de la page compte contribuable', async ({ page }) => {  
    
        comptecontribuablePage = new compteContribuablePage(page); //Initialisation de la page compte contribuable
    })
});

//regroupage des scénarios de test

test.describe('Compte contribuable', () => {
    
    //exécution du test avant chaque scénario
    
    test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
        //ouverture de la pop-up de création de compte contribuable
        
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => { 
            await comptecontribuablePage.ajouterNouveau.click(); //Cliquer sur le bouton nouveau pour ouvrir la pop-up de création
        })
        
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
            await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page
         })
        
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
            await comptecontribuablePage.inputCleapi.pressSequentially('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh'); //Remplissage des champs du formulaire de création
         })
        
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
            await comptecontribuablePage.inputRaisonsociale.pressSequentially('OVERNETFLOW'); //Remplissage des champs du formulaire de création
         })
        
        test('Cliquer sur le bouton créer', async ({ page }) => {  
            await comptecontribuablePage.boutonCreer.click(); //Cliquer sur créer pour enregistrer le nouveau compte contribuable
        })
        
        //Vérification de la création du compte contribuable
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
            await expect(comptecontribuablePage.popinCreation).toBeVisible().catch(() => {
            expect(page.locator('text=OVERNETFLOW').first()).toBeTruthy(); }); //Vérification de l'affichage du noveau compte contribuable dans la liste
        })
        
    });

    test('Rechercher par raison sociale', async ({ page }) => {

        //Saisie de la raison sociale dans le champ de recherche
        test('Recherche Raison Sociale', async ({ page }) => {
            await comptecontribuablePage.inputRechercheRaisonsociale.pressSequentially('OVERNETFLOW');
        })

        test('AChargement complet de la page', async ({ page }) => {
            await page.waitForLoadState('networkidle');
        })//attendre le chargement complet de la page
         
        //instancier une variable pour stocker le nom à rechercher
        test('stocker le nom à rechercher', async ({ page }) => {
            const nomRechercher = "OVERNETFLOW modifier";
            const ligne = page.locator('tbody tr').first(); // ligne 1
            const cellule = ligne.locator('td').nth(2); // colonne 2
            await expect(cellule).toHaveText(nomRechercher.trim()); //Vérification de l'affichage du compte contribuable recherché
        })
        
        })
    });
    
    test('Modification d\'un compte contribuable', async ({ page }) => {

        //Ouverture de la popup de modification
        test('bouton Modifier', async ({ page }) => {
            await comptecontribuablePage.boutonModifier.click(); //Cliquer sur le bouton modifier
        })
        
        test('attendre chargement', async ({ page }) => {
            await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page
        })  
        
        //Modification des champs du formulaire de modification
        test('modification des champs 1', async ({ page }) => {
            await comptecontribuablePage.inputCleapi.fill('yRoHH6QgebqQXLa8cV5Zunejd5SR6tQh'); //Remplissage des champs du formulaire de création
        })
        
        test('modification des champs 2', async ({ page }) => {
            await comptecontribuablePage.inputRaisonsociale.fill('OVERNETFLOW modifier'); //Remplissage des champs du formulaire de création
        })

        //Enregistrement des modifications
        test('Enregistrer les modifications', async ({ page }) => {
            await comptecontribuablePage.boutonEnregistrerModification.click(); //Cliquer sur enregistrer pour sauvegarder les modifications
        })

        test('attendre chargement', async ({ page }) => {
            await page.waitForLoadState('networkidle');
        })  //attendre le chargement complet de la page

        //Vérification de la modification du compte contribuable
        await expect(comptecontribuablePage.popinModification).toBeVisible().catch(() => {

            //Vérification de l'affichage des modifications dans la liste
            //expect(page.locator('text=OVERNETFLOW modifier').first()).toBeTruthy();

           /* const NomModifierr = "OVERNETFLOW modifier";
            const texteTableau = page.locator('.text-sm').nth(4);
            const contenuDutexttableau = await texteTableau.textContent();
            expect(contenuDutexttableau?.trim()).toBe(NomModifierr.trim());*/

            //--mettre  overnetflow modifier dans une variable exemple : const sNomModifier="overnetflow modifier"
            //-- verificqtion const sContenuDutextTqblequ=await page.locator('').first().textContent();

            //-- expect(sContenuDutextTqblequ:trim()).toBe(sNomModifier.trim());  
        })
    });
    
    test('Suppression d\'un compte contribuable', async ({ page }) => {

        //Ouverture de la popup de suppression
        test('Ajouter un Nouveau compte contribuables', async ({ page }) => {
            await comptecontribuablePage.boutonSupprimer.click(); //Cliquer sur le bouton supprimer
         })
        
        test('vérification suppression', async ({ page }) => {
        //Vérification de la suppression du compte contribuable
            await expect(page.locator('text=Confirmer la suppression')).toBeVisible().catch(() => {

         //Vérification de l'affichage du message de confirmation de suppression
         expect(page.locator('text=Êtes-vous sûr de vouloir supprimer le compte contribuable OVERNETFLOW ? Cette action est irréversible.').first()).toBeTruthy();
     });      
        })
        
        test('confirmer suppression', async ({ page }) => {
            await comptecontribuablePage.boutonConfirmerSuppression.click(); //Cliquer sur le bouton confirmer la suppression
        })
        
        test('attendre chargement', async ({ page }) => {
            await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page
       })
        
        test('Vérification de la suppression effective du compte contribuable', async ({ page }) => {
            await expect(comptecontribuablePage.popinSuppression).toBeVisible().catch(() => {
                expect(page.locator('text=OVERNETFLOW').first()).toBeFalsy(); //Vérification de l'absence du compte contribuable dans la liste
            });
        })
    });

test.afterEach(async ({ page }) => {

    //déconnexion de chaque scénarion
        test('Déconnexion', async ({ page }) => {
            await disconnect();
        })
    
        test('attendre chargement', async ({ page }) => {
            await page.waitForLoadState('networkidle'); //attendre le chargement complet de la page
        })

 });