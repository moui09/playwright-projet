/**
 * @description 
 * @author  Mouizah Oyekunle
 * @version 1.0
 */
import { Page, Locator } from '@playwright/test';

export class facturesTableauDeBord { 

    public readonly page  : Page;

    public readonly divTableau: Locator
    
    public readonly aTableaudebord: Locator;

    public readonly boutonFactures: Locator;


    constructor(page: Page) {
        
        this.page = page;

        this.divTableau = page.locator('div[class="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden"]').nth(0);

        this.aTableaudebord = page.locator('ul[data-slot="sidebar-menu-sub"] li').nth(3);

        this.boutonFactures = page.locator('button[data-slot="collapsible-trigger"]').nth(2);
    }
}