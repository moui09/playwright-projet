/**
 * @description Fichier helper pour les fonctions réutilisables
 * @author Mouizah oyekunle
 * @date 08-12-2025
 */

// Importation des fichiers nécessaires
import credentialData from "../config/credential.json";
import { Locator, Page, expect } from "@playwright/test";

// Récupération des données de connexion (credential.json)
const credential = credentialData.Admin;

/**
 * Connexion à l'application
 * @param page - Instance de la page Playwright
 */
export async function login(page: Page): Promise<void> {
  await page.goto("http://srv657839.hstgr.cloud:8090/login");
  await page.fill("#email", credential.Email);
  await page.fill("#password", credential.password);
  await page.getByRole("button", { name: "Se connecter" }).click();

  // Attendre la redirection après connexion
  await page.waitForLoadState("networkidle");
}

/**
 * Déconnexion de l'application
 * @param page - Instance de la page Playwright
 */
export async function disconnect(page: Page): Promise<void> {
    // Cliquer sur le bouton du menu dropdown
    const dropdownTrigger = page
      .locator('button[data-slot="dropdown-menu-trigger"]')
      .nth(1);
    await dropdownTrigger.waitFor({ state: "visible", timeout: 5000 });
    await dropdownTrigger.click();

    // Attendre que le menu soit visible
    await page.waitForTimeout(2000); // Réduit de 5s à 2s

    // Cliquer sur l'option de déconnexion
    const logoutOption = page
      .locator('div[data-slot="dropdown-menu-item"]')
      .nth(5);
    await logoutOption.waitFor({ state: "visible", timeout: 5000 });
    await logoutOption.click();

    // Vérifier la redirection vers la page de login
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL("http://srv657839.hstgr.cloud:8090/login");

}

/**
 * Cliquer sur un sélecteur avec mise en évidence optionnelle
 * @param selector - Locator Playwright
 * @param page - Instance de la page (nécessaire pour highlightSelector)
 * @param highlight - Activer la mise en évidence (optionnel)
 */
export async function clickSelector(
  selector: Locator,
  page?: Page,
  highlight: boolean = true
): Promise<void> {

    // Attendre que l'élément soit visible
    await selector.waitFor({ state: "visible", timeout: 10000 });

    // Mise en évidence optionnelle (si la fonction existe)
    if (highlight && page) {
      await highlightElement(selector);
    }

    // Cliquer sur l'élément
    await selector.click();
 
}

/**
 * Met en évidence un élément sur la page
 * @param selector - Locator Playwright
 */
export async function highlightElement(selector: Locator): Promise<void> {
  await selector.evaluate((element: HTMLElement) => {
    element.style.border = "3px solid red";
    element.style.backgroundColor = "yellow";
  });
  
  await selector.page().waitForTimeout(500);
  await selector.evaluate((element: HTMLElement) => {
    element.style.border = "";
    element.style.backgroundColor = "";
  });
}

/**
 * Utilitaire pour attendre un temps spécifique
 * @param ms - Millisecondes à attendre
 */
export async function wait(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Vérifie si un élément est visible sur la page
 * @param selector - Locator Playwright
 * @param timeout - Temps d'attente maximum (optionnel)
 */
export async function isVisible(
  selector: Locator,
  timeout: number = 5000
): Promise<boolean> {
    try {
        console.log("count", await selector.count());
    await selector.waitFor({ state: "visible", timeout });
    return true;
  } catch {
    return false;
  }
}

////////////////////////////////////////////
export async function getDate(daysToAdd = 0): Promise<string> {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toLocaleDateString("en-CA"); // YYYY-MM-DD
}
