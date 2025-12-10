/**
 * @description Fichier helper pour les fonctions réutilisables
 * @author Mouizah oyekunle
 * @date 08-12-2025
 */

//importation des fichiers nécessaires
import credentialData                    from '../config/credential.json';
import { Page, expect }                  from '@playwright/test';

//récupération des données de connexion(credential.json)
const credential = credentialData.Admin;


export async function login(page: Page) {
    
    await page.goto('http://srv657839.hstgr.cloud:8090/login');
    await page.fill('#email', credential.Email);
    await page.fill('#password', credential.password); 
    await await page.getByRole('button', { name: 'Se connecter' }).click();
}

export async function disconnect(page: Page) {

    await page.goto('http://srv657839.hstgr.cloud:8090/organization');
    await page.click('button[data-slot="dropdown-menu-trigger"]');
    await page.click('div[role="menuitem"]').withText('Logo out');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('http://srv657839.hstgr.cloud:8090/login');
}
