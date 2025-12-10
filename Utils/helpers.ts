import credentialData from '../config/credential.json';
import { Page, expect } from '@playwright/test';

const credential = credentialData.Admin;

/*export const getCredential = (key: string): string | undefined => {
    return credential[key];
};
*/
export async function login(page : Page) {;
    await page.goto('http://srv657839.hstgr.cloud:8090/login');
    await page.fill('#email', credential.Email);
    await page.fill('#password', credential.password); 
    await await page.getByRole('button', { name: 'Se connecter' }).click();
   // await expect(page).not.toHaveURL('http://srv657839.hstgr.cloud:8090/login');
}