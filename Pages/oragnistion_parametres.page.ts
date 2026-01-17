/**
 * @description 
 * @author  Mouizah Oyekunle
 * @version 1.0
 */
import { Page, Locator } from '@playwright/test';

export class organisationParametresPage { 

    public readonly page  : Page;

    public readonly liParametres: Locator;

    public readonly inputNom: Locator;
    public readonly inputDescription: Locator;

    public readonly boutonSauvegarder: Locator;


    constructor(page: Page) {
        
        this.page = page;

        this.liParametres = page.locator('ul[data-slot="sidebar-menu-sub"] li').nth(2);

        this.inputNom = page.locator('#name');
        this.inputDescription = page.locator('#description');

        this.boutonSauvegarder = page.locator('div[class="flex justify-end pt-4"] button').nth(0);
    }
}