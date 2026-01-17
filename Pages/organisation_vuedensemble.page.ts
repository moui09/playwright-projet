/**
 * @description 
 * @author  Mouizah Oyekunle
 * @version 1.0
 */
import { Page, Locator } from '@playwright/test';

export class organisationVueDEnsemblePage { 

    public readonly page  : Page;

    public readonly  divVueDensemble : Locator


    constructor(page: Page) {
        
        this.page = page;
        this.divVueDensemble = page.locator('div[class="space-y-6 overflow-hidden"]').nth(0);
    }
}