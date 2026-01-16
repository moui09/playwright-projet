/**
 * @file dossiers_gestiondesdossiers.spec.ts
 * @description Gestion des dossiers - Scénarios de test
 * @author  Mouizah Oyekunle
 * @version 1.0
 * @date 11-12-2025
 */
import { test, type Page } from "@playwright/test";
import { gestionDesdossiersPage } from "../Pages/dossiers_gestiondesdossiers.page";
import { login, disconnect, clickSelector } from "../Utils/helpers";

// Variable globale
export let page                        : Page;
let gestiondesdossiers          : gestionDesdossiersPage;

const nomDuPointVente           = "OVENETFOW-FAYA";
const nomEtablissement          = "OVENETFOW-FAYA-ADJAME-BINGERVILLE";
const nomCompteContribuable     = "OVERNETFLOW modifier";
// Before all test
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  gestiondesdossiers = new gestionDesdossiersPage(page); // Instanciation
});

// After all test
test.afterAll(async () => {
  await page.close();
});

// Regroupage des scénarios de test
test.describe.serial("Gestion des dossiers", () => {
  test("Connexion", async () => {
    await login(page);
  });

  test("Cliquer sur l'onglet dossiers", async () => {
    await clickSelector(gestiondesdossiers.boutonDossiers, page);
    await page.waitForTimeout(3000);
    await page.waitForLoadState("networkidle");
  });

  test("Cliquer sur l'onglet Gestion des dossiers", async () => {
    await page.waitForTimeout(3000);
    await clickSelector(gestiondesdossiers.divGestondesdossiers.nth(3), page);
    await page.waitForTimeout(3000);
  });
  /*test("Aller à ctte page", async () => {
    await page.goto("http://srv657839.hstgr.cloud:8090/folders");
  });*/

  //test.describe 01
  test.describe("Création d'un nouveau dossier", () => {
    test("Cliquer sur créer un dossier", async () => {
      await clickSelector(gestiondesdossiers.boutonCreerDossier, page);
    });

    // Remplissage des champs de la pop-up de création de dossier
    test("Remplir le nom du dossier", async () => {
      await gestiondesdossiers.inputNomDossier.fill("OVERNETFLOW");
    });

    //Remplissage des autres champs date de début et date de fin

    test("Renseigner le champ date de début", async () => {
      await page.evaluate(() => {
        const el = document.querySelector("#dateDebut") as HTMLInputElement;
        if (el !== null) {
          el.value = "15/01/2026";
        }
        console.log(
          " Date de début renseignée avec succès",
          document.querySelector("#dateDebut")
        );
      });
    });

    test("Choisir la date de fin", async () => {
      await page.evaluate(() => { 
        const el = document.querySelector("#dateFin") as HTMLInputElement;
        if (el !== null) {
          el.value = "30/04/2026";
        }

        console.log(" Date de fin renseignée avec succès");
      });
    });


    test("Sélectionner le point de vente", async () => {
      //await clickSelector(gestiondesdossiers.inputPointdevente);
      await gestiondesdossiers.inputPointdevente.fill(nomDuPointVente);
    });

    test("Sélectionner l'établissement", async () => {
      //await clickSelector(gestiondesdossiers.inputEtablissement, page);
      await gestiondesdossiers.inputEtablissement.fill(nomEtablissement);
    });
    
    test("Cliquer sur le bouton Compte contribuable", async () => {
      await clickSelector(gestiondesdossiers.boutonComptecontribuable, page);
    });

    test("choisir OVERNETFLOW", async () => {
      await clickSelector(gestiondesdossiers.divCompteContribuable.getByText(nomCompteContribuable), page);
    });

    test("Cliquer sur le bouton créer le dossier", async () => {
      //await clickSelector(gestiondesdossiers.boutonCreationDos, page);
      await gestiondesdossiers.boutonCreationDos.dblclick();
      console.log("Création terminé avec succès");
      await page.waitForTimeout(30000);
    });
    
  });
/*
  //test.describe 02
  test.describe("Rechercher un dossier par Nom,Description", () => {
    //
    test("cliquer sur l'input de recherche", async () => {
      await clickSelector(gestiondesdossiers.inputRechercher, page);
    });

    test("Remplir le champ de recherche avec le nom", async () => {
      await gestiondesdossiers.inputRechercher.fill("OVERNETFLOW");
    });

    test("Attendre que la ligne soit visible", async () => {
      await gestiondesdossiers.tdNomdossier.waitFor({state: "visible",timeout: 5000});
    });
  }); //fin du 02 describe

  //test.describe 03
  test.describe("Filtrer un dossier par statut", async () => {
    test("", async () => {
      await gestiondesdossiers.boutonFilter.selectOption({ label: "Actif" });
    });
  }); //fin du 03 describe

  //test.describe 04
  test.describe("Activer un dossier  ", async () => {
    test("cliquer sur le bouton activer", async () => {
      await clickSelector(gestiondesdossiers.boutonActiver, page);
    });

    test("Affichage de la pop-up", async () => {
      await gestiondesdossiers.popupActiverdossier.waitFor({state: "visible",timeout: 5000});
    });

    test("Cliquer sur le bouton Confirmer l'activation", async () => {
      await clickSelector(gestiondesdossiers.boutonConfirmeractivation, page);
    });

    /*test("Affichage de l'input", async () => {

     });*/
//}); //fin du 04 describe
  
/*
  //test.describe 05 à reprendre avec les bons sélecteurs
  test.describe("Désactiver un dossier  ", async () => {

    test("cliquer sur le bouton activer", async () => {
      await clickSelector(gestiondesdossiers.boutonActiver, page);
    });

    test("Affichage de la pop-up", async () => {
      await gestiondesdossiers.popupActiverdossier.waitFor({
        state: "visible",
        timeout: 5000,
      });
    });

    test("Cliquer sur le bouton Confirmer l'activation", async () => {
      await clickSelector(gestiondesdossiers.boutonConfirmeractivation, page);
    });

    /*test("Affichage de l'input", async () => {

     });*/
  //});
  //fin du 05 describe

  //test.describe 06
  test.describe("", async () => {

    test("", async () => {});
  }); //fin du 06describe

  /*test("Déconnexion", async () => {
    await disconnect(page);
  }); //fin du test déconnexion
  */
});//fin du grand describe
