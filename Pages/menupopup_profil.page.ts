/**
 * @author Mouizah Oyékunlé
 * @description Modification du profil utilisateur
 * @date 13-01-2026
 * @version 1.0
 */

// importation des modules nécessaires
import { Page, Locator } from 'playwright';

export class MenuPopupProfilPage {

    public readonly menuPopupProfilPage: Page;

    public readonly boutonMenu: Locator;
    public readonly boutonProfil: Locator;
    public readonly boutonEnregistrer: Locator;

    public readonly popupModifierProfil: Locator;

    public readonly inputPrenom: Locator;
    public readonly inputNom: Locator

    constructor(page:Page) {

        this.menuPopupProfilPage = page;

        this.boutonMenu = page.locator('button[data-slot="dropdown-menu-trigger"]').nth(1);
        this.boutonProfil = page.locator('div[data-slot="dropdown-menu-item"]').nth(1);
        this.boutonEnregistrer = page.locator('button[data-slot="button"]').nth(7);

        this.popupModifierProfil = page.locator('div[data-slot="dialog-content"]').nth(0);

        this.inputPrenom = page.locator('input[id="firstName"]');
        this.inputNom = page.locator('input[id="lastName"]');
    };
};