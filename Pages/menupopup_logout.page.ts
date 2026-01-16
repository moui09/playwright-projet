/**
 * @description Déconnexion de l'utilisateur via le menu popup
 * @author Mouizah Oyékunlé
 * @date 13-01-2026
 * @version 1.0
 */

//importation des modules nécessaires
import { Locator, Page } from '@playwright/test';

export class MenuPopupLogoutPage {

    public readonly menuPopupLogoutPage: Page;

    public readonly boutonMenu: Locator;
    public readonly boutonLogOut: Locator;

    public readonly popin: Locator;

    constructor(page: Page) {
        
        this.menuPopupLogoutPage = page;

        this.boutonMenu = page.locator('button[data-slot="dropdown-menu-trigger"]').nth(1);
        this.boutonLogOut = page.locator('div[data-slot="dropdown-menu-item"]').nth(5);

        this.popin = page.locator('li[data-x-position="center"]');

    };
 };